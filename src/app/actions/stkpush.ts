"use server"
import Axios from "axios"
import { Buffer } from 'node:buffer'

interface StkPushResponse {
    success: boolean;
    CheckoutRequestID?: string;
    MerchantRequestID?: string;
    error?: string;
}

interface StkPushParams {
    accessToken: string;
    shortcode: string;
    passkey: string;
    phone_number: string;
    amount: string;
    callback_url: string;
    account_reference: string;
    transaction_desc: string;
}

export default async function handleMpesaSubmit(prevstate : any, formData: FormData){
try {
        // Add loading delay (consider removing in production)
        await new Promise((resolve) => { setTimeout(resolve, 2000) });
        
        const phone_number = formData.get("phonenumber");
        console.log(phone_number)
        // Validate phone number  
        if (!phone_number || typeof phone_number !== 'string') {
            return { success: false, error: "Phone number is required" };
        }    
         
        // Format phone number (ensure it starts with 254)
        const formattedPhone = formatPhoneNumber(phone_number);
        if (!formattedPhone) {
            return { success: false, error: "Invalid phone number format" };
        }

        // Environment variables for security
        const consumer_key = process.env.MPESA_CONSUMER_KEY 
        const consumer_secret = process.env.MPESA_CONSUMER_SECRET
        const passkey = process.env.MPESA_PASS_KEY 
        const shortcode = process.env.MPESA_SHORTCODE
        const callback_url = process.env.MPESA_CALLBACK_URL
        
        if (!consumer_key || !consumer_secret || !passkey || !shortcode || !callback_url) {
            return { success: false, error: "Missing environment variables" };
        }

        // STEP 1: GET ACCESS TOKEN
        const accessToken = await getAccessToken(consumer_key, consumer_secret);
        if (!accessToken) {
            return { success: false, error: "Failed to get access token" };
        }
        // STEP 2: INITIATE STK PUSH
        const stkResult = await initiateSTKPush({
            accessToken,
            shortcode, 
            passkey,
            phone_number: formattedPhone,
            amount: "1",
            callback_url,
            account_reference: "Test Payment",
            transaction_desc: "Test Payment"
        });

        if (stkResult.success) {
            return { 
                success: true, 
                message: "Request is successful sent ✔✔",
                checkout_request_id: stkResult.CheckoutRequestID,
                merchant_request_id: stkResult.MerchantRequestID
            };
        } else {
            return { 
                success: false, 
                error: stkResult.error || "Failed to initiate STK push" 
            };
        }

    } catch (error) {
        console.error("M-Pesa STK Push Error:", error);
        return { 
            success: false, 
            error: "An unexpected error occurred. Please try again." 
        };
    }

}


// Helper function to get access token
async function getAccessToken(consumer_key:string, consumer_secret:string){
    try {
        const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
        const auth = "Basic " + Buffer.from(consumer_key  + ":" + consumer_secret).toString("base64");

        const response = await Axios.get(url, {
            headers: {
                Authorization: auth,
                'Content-Type': 'application/json'
            },
            timeout: 30000 // 30 second timeout
        });

        console.log("Access Token retrieved successfully");
        return response.data.access_token;
    } catch (error) {
        console.error("Access Token Error:", error as Error);
        return null;
    }
}

// Helper function to initiate STK push
async function initiateSTKPush({
    accessToken,
    shortcode,
    passkey,
    phone_number,
    amount,
    callback_url,
    account_reference,
    transaction_desc
}: {
    accessToken: string,
    shortcode: string,
    passkey: string,
    phone_number: string,
    amount: string,
    callback_url: string,
    account_reference: string,
    transaction_desc: string
}) {
    try {
        const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
        const timestamp = generateTimestamp();
        const password = Buffer.from(shortcode + passkey + timestamp).toString("base64");

        const payload = {
            BusinessShortCode: shortcode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: "CustomerPayBillOnline",
            Amount: amount,
            PartyA: phone_number,
            PartyB: shortcode,
            PhoneNumber: phone_number,
            CallBackURL: callback_url,
            AccountReference: account_reference,
            TransactionDesc: transaction_desc
        };

        const response = await Axios.post(url, payload, {
            headers: {
                Authorization: "Bearer " + accessToken,
                'Content-Type': 'application/json'
            },
            timeout: 30000 // 30 second timeout
        });

        console.log("STK Push Response:", response.data); 
        

        //check if response indicate success
        if (response.data.ResponseCode === "0") {
            return {
                success: true,
                message: "Payment made successfully",
                CheckoutRequestID: response.data.CheckoutRequestID,
                MerchantRequestID: response.data.MerchantRequestID
            };
        } else {
            return {
                success: false,
                error: response.data.ResponseDescription || "STK push failed"
            };
        }


    } catch (error) {
        console.error("STK Push Error:", error as Error);
        return {
            success: false,
            error: error as Error|| "Network error occurred"
        };
    }
}

// Helper function to generate timestamp
function generateTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

// Helper function to format phone number
function formatPhoneNumber(phone : string) {
    if (typeof phone !== 'string') return null;
    
    // Remove any spaces, dashes, or other non-numeric characters
    let cleaned = phone.replace(/\D/g, '');
    
    // Handle different formats
    if (cleaned.startsWith('0')) {
        // Convert 0712345678 to +254712345678
        cleaned = '254' + cleaned.substring(1);
    } else if (cleaned.startsWith('254')) {
        // Already in correct format
    } else if (cleaned.startsWith('7') && cleaned.length === 9) {
        // Convert 712345678 to 254712345678
        cleaned = '254' + cleaned;
    } else {
        return null; // Invalid format
    }
    
    // Validate Kenyan mobile number format
    if (cleaned.length === 12 && cleaned.startsWith('254')) {
        return cleaned;
    }
    
    return null;
}
