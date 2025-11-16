"use client"
import {useState, useEffect, useActionState} from "react"
import Image from "next/image";
import Link from 'next/link'
import $ from "jquery"
import handleMpesaSubmit from "./actions/stkpush"

export default function Home (){
  const [work1, setWork1] = useState(true)
  const [work2, setWork2] = useState(false)
  const [work3, setWork3] = useState(false)
  const [state,myaction,pending] = useActionState(handleMpesaSubmit, {success: false, error : null})
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleWorkOne = () => {
    setWork1(true)
    setWork2(false) 
    setWork3(false)
    $(document).ready(function(){
      $('#work1').show("slow")
      $('#work2').hide("slow")
      $('#work3').hide("slow")
    })
  }

  const handleWorkTwo = () => {
    setWork1(false)
    setWork2(true)
    setWork3(false)
    $(document).ready(function(){
      $('#work2').show("slow")
      $('#work1').hide("slow")
      $('#work3').hide("slow")
    })
  }

  const handleWorkThree = () => {
    setWork1(false)
    setWork2(false)
    setWork3(true)
   $(document).ready(function(){
      $('#work3').show("slow")
      $('#work1').hide("slow")
      $('#work2').hide("slow")
    })
  }

  const handleDashboard = () => {
    $("#dash").slideDown("slow")
    $("#message").hide("slow")
    $("#inbox").hide("slow")
    $("#users").hide("slow")
  }

  const handleMessage = () => { 
    $("#message").slideDown("slow")
    $("#dash").hide("slow")
    $("#inbox").hide("slow")
    $("#users").hide("slow")
  }

  const handleInbox = () => {
    $("#inbox").slideDown("slow")
    $("#dash").hide("slow")
    $("#message").hide("slow")
    $("#users").hide("slow")
  }

  const handleUsers = () => {
    $("#users").slideDown("slow")
    $("#dash").hide("slow")
    $("#message").hide("slow")
    $("#inbox").hide("slow")
  }

  const handleUserDropdown = () => {
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('hidden');
      dropdown.classList.toggle('block');
    }
  }
  
  const handleToggleNavbar = () => {
    const navbar_dropdown = document.getElementById('navbar-user');
    if (navbar_dropdown) {
      navbar_dropdown.classList.toggle('hidden');
      navbar_dropdown.classList.toggle('block');
    }
  }

  return (
    <div className="bg-slate-500">
   <div className="p-3 md:flex justify-center grid md:grid-cols-2 gap-8 max-screen-w-full mx-auto overflow-hidden" id="content">
    <div className="flex flex-col justify-center items-start md:items-start align-center">
      <div className="flex justify-center items-center mx-auto">
        <h1 className="md:text-6xl text-4xl md:max-w-screen-sm font-bold py-6 px-4 flex flex-col text-center"><span className="text-white md:text-3xl text-2xl">Hello I'm Keith,</span><br/> a seasoned Fullstack Developer.</h1>
      </div>
        <p className="flex text-gray-500 mb-4 hover:text-white text-start-2 text-lg px-4">
          <svg className="w-6 h-6 text-gray-500 dark:text-gray hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
          </svg>
          Nairobi, Kenya.
        </p>
        <div className="flex">
            <Link href="https://github.com/keith986" target="_blank" className="flex justify-space-evenly rounded-4xl text-white cursor-pointer hover:blur-[0.5px] hover:scale-110  bg-transparent-700 hover:bg-transparent-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-4 py-4 text-center dark:bg-transparent-600 dark:hover:bg-transparent-700 dark:focus:ring-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out">
              <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
              </svg>
              <span className="mx-2 mt-1">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/keith-baraka-69538136b" target="_blank" className="flex mx-4 text-white cursor-pointer hover:blur-[0.5px] hover:scale-110  bg-transparent-700 hover:bg-transparent-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-4xl text-sm px-4 py-4 text-center dark:bg-transparent-600 dark:hover:bg-transparent-700 dark:focus:ring-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out">
              <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
              <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
              </svg>
              <span className="mx-2 mt-1">LinkedIn</span>
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&to=keithkelly986@gmail.com&su=Let us talk!" target="_blank" className="flex text-white cursor-pointer hover:blur-[0.5px] hover:scale-110 bg-transparent-700 hover:bg-transparent-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-4xl text-sm px-4 py-4 text-center dark:bg-transparent-600 dark:hover:bg-transparent-700 dark:focus:ring-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out">
              <svg className="w-6 h-6 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg>
              <span className="mt-1 mx-2">Email</span>
            </Link>
        </div>
    </div>
    <div className="flex justify-center">
      <Image
        src="/images/keith3.png"
        alt="Keith's profile picture"
        width={200}
        height={200}
        className="rounded-full mx-auto border-none"
      />
    </div>
   </div>

<div className="mt-12 p-4 grid md:grid-cols-3 gap-4">
    <div className="mx-6 md:mt-34">  
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Work Experience</h2>   
       <div className="flex flex-cols items-center md:mt-20">

        <div className="rotate-90">
    <ol className="flex items-center w-full">
    <li className={work1 ? "flex cursor-pointer w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-400 after:border-4 after:inline-block dark:after:border-blue-700 hover:opacity-75" : "flex cursor-pointer w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700 hover:opacity-75"} onClick={handleWorkOne}>
        <span className={work1 ? "flex items-center justify-center w-10 h-10 bg-blue-400 rounded-full lg:h-12 lg:w-12 dark:bg-blue-700 shrink-0" : "flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"}></span>
    </li>
    <li className={work2 ? "flex cursor-pointer w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-400 after:border-4 after:inline-block dark:after:border-blue-700 hover:opacity-75" : "flex cursor-pointer w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700 hover:opacity-75"} onClick={handleWorkTwo}>
        <span className={work2 ? "flex items-center justify-center w-10 h-10 bg-blue-400 rounded-full lg:h-12 lg:w-12 dark:bg-blue-700 shrink-0" : "flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"}></span>
    </li>
    <li className="flex cursor-pointer items-center w-full" onClick={handleWorkThree}>
        <span className={work3 ? "flex items-center justify-center w-10 h-10 bg-blue-400 rounded-full lg:h-12 lg:w-12 dark:bg-blue-700 shrink-0 hover:opacity-75" : "flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0 hover:opacity-75"}></span>
    </li> 
    </ol> 
        </div>
        <div>
          <div className="my-3 hidden" id="work1">
          <p className="text-gray-500">Swift Tracing & Consultancy Limited</p>
          <p className="text-gray-500">Web Developer</p>
          <i className="text-sm">Worked for Swift Tracing & Consultancy for a contracted Job that involved creating and maintaining there company website.</i>
          </div>
          <div className="my-3" id="work2">
          <p className="text-gray-500">Upwork ~ Freelancer</p>
          <p className="text-gray-500">Web Developer</p>
          <i className="text-sm">Created a web app for a store delivery management platform with 200+ business customers to create, manage and monitor deliveries using React.</i>
          </div>
          <div className="my-3 hidden" id="work3">
          <p className="text-gray-500">Upwork ~ Freelancer</p>
          <p className="text-gray-500">Web Developer</p>
          <i className="text-sm">Developed a web application for a school management system that automated administrative tasks and improved communication between teachers, students, and parents.</i>
          </div>
        </div>
       </div>
    </div>
<div className="col-span-2 -skew-2 hover:-skew-1 rotate-x-5 -rotate-y-10 scale-80 hover:scale-83 transition-transform duration-300 ease-in-out">
<div className="appearse">  
<nav className="w-full bg-transparent z-30">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-1">
          <div></div>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className={"cursor-pointer flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" } id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" onClick={handleUserDropdown}>
                <span className="sr-only">Open user menu</span>
                <Image className="w-8 h-8 rounded-full" src="/images/keith3.png" width={50} height={50} alt="user photo" />
              </button>
        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 absolute top-5 right-2" id="user-dropdown">
        <div className="px-4 py-3" onClick={handleUserDropdown}>
          <span className="block text-sm text-gray-900 dark:text-white">Username</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">username@example.com</span>
        </div>
        <ul className="py-2 bg-red-600 hover:opacity-75" aria-labelledby="user-menu-button">
          <li className="block px-4 py-2 text-sm text-gray-700 cursor-pointer dark:text-gray-200 dark:hover:text-white" onClick={handleUserDropdown}>
            Log out
          </li>
        </ul>
      </div>     
              <button data-collapse-toggle="navbar-user"  type="button" className={ "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"} aria-controls="navbar-user" aria-expanded="false" onClick={handleToggleNavbar}>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-1 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                Home
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Service
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Pricing
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Blog
              </li>
              <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
              </li>
            </ul>
          </div>
          </div>
</nav>
<div className="py-4 mt-4 bg-white rounded-lg shadow-md dark:bg-gray-800 h-full">
<div className="p-2 sm:ml-64" id="dash"> 
   <div className="p-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-600 dark:text-gray-400">
               Welcome Keith!
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800 border border-white-800 hover:border-none hover:bg-gray-100 dark:hover:bg-gray-700">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="text-2xl text-white-400 dark:text-white">12</span>
            </p>  
         </div>
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800 border border-white-800 hover:border-none hover:bg-gray-100 dark:hover:bg-gray-700">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 hover:text-gray-100 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <p className="text-2xl text-white-400 dark:text-white">3</p>
            </p>
         </div>
      </div>
      <div className="flex items-start justify-start mb-4 rounded-sm p-3">
        <p className="text-sm text-gray-500 dark:text-gray-400 p-2">
         Recent messages
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="flex flex-col items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                <div className="flex justify-between w-full">
                  <div>
                  <Image className="w-8 h-8 rounded-full md:visible invisible" src="/images/keith3.png" width={50} height={50} alt="user photo" />
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                  </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                  </svg>
                </div>
           <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
           <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
         </div>
         <div className="flex flex-col items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                <div className="flex justify-between w-full">
                  <div>
                  <Image className="w-8 h-8 rounded-full md:visible invisible" src="/images/arrow3.png" width={50} height={50} alt="user photo" />
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Stephen Carry</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                  </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                  </svg>
                </div>
           <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
           <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
         </div>
         <div className="flex flex-col items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                <div className="flex justify-between w-full">
                  <div>
                  <Image className="w-8 h-8 rounded-full md:visible invisible" src="/images/keith2.jpg" width={50} height={50} alt="user photo" />
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Mary Jane</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                  </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                  </svg>
                </div>
           <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
           <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
         </div>
         <div className="flex flex-col items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
                <div className="flex justify-between w-full">
                  <div>
                  <Image className="w-8 h-8 rounded-full md:visible invisible" src="/images/arrow.png" width={50} height={50} alt="user photo" />
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">John Doe</span>
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                  </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                  </svg>
                </div>
           <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
           <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
         </div>
      </div>
      <div className="flex items-start justify-start mb-4 rounded-sm">
        <p className="text-sm text-gray-400 dark:text-gray-700 p-2">
         Online users 
        </p>
      </div>
      <div className="flex flex-row justify-between">
      <div className="flex flex-row">
      <div className="relative">
        <Image className="w-10 h-10 rounded-full" src="/images/keith3.png" width={50} height={50} alt="user photo" />
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="relative">
        <Image className="w-10 h-10 rounded-full" src="/images/arrow.png" width={50} height={50} alt="user photo" />
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="relative">
        <Image className="w-10 h-10 rounded-full" src="/images/keith.png" width={50} height={50} alt="user photo" />
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="relative">
        <Image className="w-10 h-10 rounded-full" src="/images/arrow.png" width={50} height={50} alt="user photo" />
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      </div>
      </div>
  </div>     
</div>
<div className="p-4 sm:ml-64 hidden" id="message">
   <div className="p-4 rounded-lg dark:border-gray-700">
      <div className="grid grid-cols-2 gap-4 mb-2">
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray">
               <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M8 7V2.221a2 2 0 0 0-.5.365L3.586 6.5a2 2 0 0 0-.365.5H8Zm2 0V2h7a2 2 0 0 1 2 2v.126a5.087 5.087 0 0 0-4.74 1.368v.001l-6.642 6.642a3 3 0 0 0-.82 1.532l-.74 3.692a3 3 0 0 0 3.53 3.53l3.694-.738a3 3 0 0 0 1.532-.82L19 15.149V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clipRule="evenodd"/>
                  <path fillRule="evenodd" d="M17.447 8.08a1.087 1.087 0 0 1 1.187.238l.002.001a1.088 1.088 0 0 1 0 1.539l-.377.377-1.54-1.542.373-.374.002-.001c.1-.102.22-.182.353-.237Zm-2.143 2.027-4.644 4.644-.385 1.924 1.925-.385 4.644-4.642-1.54-1.54Zm2.56-4.11a3.087 3.087 0 0 0-2.187.909l-6.645 6.645a1 1 0 0 0-.274.51l-.739 3.693a1 1 0 0 0 1.177 1.176l3.693-.738a1 1 0 0 0 .51-.274l6.65-6.646a3.088 3.088 0 0 0-2.185-5.275Z" clipRule="evenodd"/>
               </svg>
               New Message
            </p>
         </div>
         <div className="flex items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
               <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer" type="button">SELECT<svg className="float-right w-4 h-2.5 ms-3 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
               </svg>
               </button> 
         </div>
      </div>
      <div id="dropdowns" className="overflow-y-auto z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 mb-4 max-h-50">
               <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                     <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All user</a>
                  </li>
                  <li>
                     <input name="search" className="m-2 block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Custom user(s): Search by username"/>
                  </li>
               </ul>
      </div>

<div className="flex items-center justify-center mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
<div className="w-full relative overflow-x-auto p-2 sm:rounded-lg">
 
   <input type="hidden" id="rname" name="rname" value=""/>
   <input type="hidden" id="receipts" name="receipts" value=""/>
  <textarea name="message" className="w-full bg-gray-50 min-h-50 p-2 text-gray-800 border rounded outline-none" placeholder="Compose a new message" id="message"></textarea>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Send a message</button>
 
 </div>
</div>

   </div>
</div>
<div className="p-4 sm:ml-64 hidden" id="inbox">
   <div className="p-4 rounded-lg dark:border-gray-700">
      <div className="grid grid-cols-3 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray">
               My Inboxes
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="flex items-center justify-center flex-col text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-6 h-6 text-green-400 dark:text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                 <path fillRule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clipRule="evenodd"/>
                </svg>
                <p className="text-2xl text-white-400 dark:text-white">255</p>
                <p className="text-2xl text-green-400 dark:text-green">Success</p>
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="flex items-center justify-center flex-col text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-6 h-6 text-red-400 dark:text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
                </svg>
               <p className="text-2xl text-white-400 dark:text-white">3</p>
               <p className="text-2xl text-red-400 dark:text-red">Failed</p>
            </p>
         </div>
      </div>

<div className="flex items-center justify-center mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
<div className="w-full relative overflow-x-auto p-2 sm:rounded-lg">
    <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
             <input type="text" id="table-search" className="outline-none block mb-2 pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by username"/>
       </div>
    

  <div className="pb-4 bg-white dark:bg-gray-900">
    <table className="relative w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    username
                </th>
                <th scope="col" className="px-6 py-3">
                    Message
                </th>
                <th scope="col" className="px-6 py-3">
                    delivery status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Clinton Luverson
                </th>
                <td className="px-6 py-4">
                    This is a trial message.
                </td>
                <td className="px-6 py-4">
                    <p className="text-green-600">success</p>
                </td>
                <td className="px-6 py-4">
                    <button className="cursor-pointer">Resend</button>
                </td>
                </tr>
                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Stephen Musyoka
                </th>
                <td className="px-6 py-4">
                    This is a trial message.
                </td>
                <td className="px-6 py-4">
                    <p className="text-green-600">success</p>
                </td>
                <td className="px-6 py-4">
                    <button className="cursor-pointer">Resend</button>
                </td>
                </tr>
                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Jemmy Fox
                </th>
                <td className="px-6 py-4">
                    This is a trial message.
                </td>
                <td className="px-6 py-4">
                    <p className="text-green-600">success</p>
                </td>
                <td className="px-6 py-4">
                    <button className="cursor-pointer">Resend</button>
                </td>
                </tr>
        </tbody>
    </table>
    </div>
</div>
</div>

   </div>
</div>
<div className="p-4 sm:ml-64 hidden" id="users">
   <div className="p-4 rounded-lg dark:border-gray-700">
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray">
               All Users
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
            <p className="flex items-center justify-center flex-col text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                </svg>
                <p className="text-2xl text-white-400 dark:text-white">4</p>
            </p>
         </div>
      </div>

<div className="flex items-center justify-center mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
<div className="w-full relative overflow-x-auto p-2 sm:rounded-lg">
    <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
             <input type="text" id="table-search" className="outline-none block mb-2 pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by username"/>
    </div>
  

  <div className="pb-4 bg-white dark:bg-gray-900">
    <table className="relative w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    NAME
                </th>
                <th scope="col" className="px-6 py-3">
                    LOCATION
                </th>
                <th scope="col" className="px-6 py-3">
                    PHONE NUMBER
                </th>
                <th scope="col" className="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mary Jane
                </td>
                <td className="px-6 py-4">
                    Mombasa, Kenya
                </td>
                <td className="px-6 py-4">
                    +254712345678
                </td>
                <td className="px-6 py-4 text-green-600">
                    online
                </td>
                <td className="px-6 py-4">
                    <button className="cursor-pointer text-red-500">Delete</button>
                </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Jemmy Fox
                </td>
                <td className="px-6 py-4">
                    Karen, Kenya
                </td>
                <td className="px-6 py-4">
                    +254787654321
                </td>
                <td className="px-6 py-4 text-green-600">
                    online
                </td>
                <td className="px-6 py-4">
                    <button className="cursor-pointer text-red-500">Delete</button>
                </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Stephen Musyoka
                </td>
                <td className="px-6 py-4">
                    Nakuru, Kenya
                </td>
                <td className="px-6 py-4">
                    +254724504854
                </td>
                <td className="px-6 py-4 text-green-600">
                    online
                </td>
                <td className="px-6 py-4">
                    <button className="cursor-pointer text-red-500">Delete</button>
                </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Clinton Luverson
                </th>
                <td className="px-6 py-4">
                    Nairobi City, Kenya
                </td>
                <td className="px-6 py-4">
                    +254754493403
                </td>
                <td className="px-6 py-4 text-gray-400">
                    offline
                </td>
                <td className="px-6 py-4">
                    <button className="cursor-pointer text-red-500">Delete</button>
                </td>
                </tr>
        </tbody>
    </table>
  </div>
</div>
</div>

   </div>
</div>
<aside id="separator-sidebar" className="absolute top-15 z-40 w-64 h-100 transition-transform -translate-x-full sm:translate-x-0 invisible md:visible" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li onClick={handleDashboard}>
            <div className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
               <span className="ms-3">Dashboard</span>
            </div>
         </li>
         <li onClick={handleMessage}>
            <div className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path clipRule="evenodd" fillRule="evenodd" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z" />
                </svg>
               <span className="ms-3">Write a message</span>
            </div>
         </li>
         <li onClick={handleInbox}>
            <div className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </div>
         </li>
         <li onClick={handleUsers}>
            <div className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </div>
         </li>
      </ul>
      <ul className="pt-5 mt-5 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
         <li>
            <div className="cursor-pointer flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
               <path fillRule="evenodd" d="M7 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd"/>
               <path fillRule="evenodd" d="M2 11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd"/>
               <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
               </svg>
               <span className="ms-3">Terms and Conditions</span>
            </div>
         </li>
         <li>
            <div className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
               <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                  <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z"/>
               </svg>
               <span className="ms-3">Help</span>
            </div>
         </li>
      </ul>
   </div>
</aside>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4">
<div className="p-4">
<div className="p-4 rounded-lg dark:border-gray-700">
<div className="flex items-center justify-center mb-4">
<div className="w-full relative overflow-x-auto p-2 sm:rounded-lg">
<section className="bg-white py-4 antialiased dark:bg-gray-900 rounded-lg" id="pwm">
   <h1 className="mb-2 flex items-center text-2xl gap-1 font-medium text-gray-900 dark:text-white justify-center p-2">Trial payment with Mpesa Integration</h1>
   <i className="flex justify-center text-gray-500">Send an Mpesa Prompt.</i>
  <div className="mx-auto max-w-screen-xl 2xl:px-0">
    <div className="mx-auto max-w-5xl">
      { state.success && <p className="flex justify-center text-green-500 dark:text-green-700" id="suc">{state.message}</p> }
       { state.error && <p className="text-red-500 flex justify-center" id="err">{state.error}</p> }
      <div className="mt-6 sm:mt-4 lg:flex lg:items-start lg:justify-center lg:gap-12">
        <form action={myaction}  className="w-full rounded-lg p-4 shadow-sm sm:p-6 lg:max-w-xl lg:p-8">
          <div className="mb-6 grid grid-cols gap-4">
            <div>
              <label className="mb-2 flex items-center text-sm gap-1 font-medium text-gray-900 dark:text-white">Enter your phone number</label>
              <input type="number" id="phonenumber" name="phonenumber"  aria-describedby="helper-text-explanation" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="enter your phone number" required />
            </div>
          </div>
          <button type="submit"  className="cursor-pointer flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4  focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{pending ? "Please wait" :"Send Mpesa STK Push"}</button>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
</div>
</div>
</div>
<div className="mx-4 md:mt-15 p-10">
<div>
<i>
Apart from my frontend skills, I also possess a comprehensive backend development skills. I have an enterprise-level capabilities in payment processing, security, and system integration.
I am keen on security matters such as (environment variables, input validation), proper error handling throughout the entire flow, and the sophisticated data transformation logic (phone number formatting). 
I have strong understanding for both technical implementation and business requirements of financial applications.
</i>
</div>
</div>
</div>

<div className="md:flex justify-center relative">
  <div className="flex flex-row justify-center">
  <div className="rounded p-1 nav-option mt-6" title="Next Js">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-gray p-4 rounded bg-gradient-to-b from-gray-400 to-transparent" src="/images/next.png" width="100" height="100" alt=""/>
  </div>
  <div className="rounded p-1 nav-option mt-6" title="React Js">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-sky p-4 rounded bg-gradient-to-b from-sky-400 to-transparent" src="/images/reactjs.png" width="100" height="100" alt=""/>
  </div>
  <div className="rounded p-1 nav-option mt-6" title="TypeScript">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-blue p-4 rounded bg-gradient-to-b from-blue-500 to-transparent" src="/images/typescript.png" width="100" height="100" alt=""/>
  </div>
  <div className="rounded p-1 nav-option mt-6" title="Node Js">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-green p-4 rounded bg-gradient-to-b from-green-300 to-transparent" src="/images/nodejs.png" width="100" height="100" alt=""/>
  </div>
  <div className="rounded p-1 nav-option mt-6" title="Express Js">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-gray p-4 rounded bg-gradient-to-b from-gray-600 to-transparent" src="/images/express-js.png" width="100" height="100" alt=""/>
  </div>
  </div>

  <div className="flex flex-row justify-center">
  <div className="rounded p-1 nav-option mt-6" title="CSS">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-blue p-4 rounded bg-gradient-to-b from-sky-600 to-transparent" src="/images/css.png" width="100" height="100" alt=""/>
  </div>
  <div className="rounded p-1 nav-option mt-6" title="Tailwind CSS">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-sky p-4 rounded bg-gradient-to-b from-sky-400 to-transparent" src="/images/tailwind.png" width="100" height="100" alt=""/>
  </div>
  <div className="rounded p-1 nav-option mt-6" title="Bootstrap">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-purple p-4 rounded bg-gradient-to-b from-purple-400 to-transparent" src="/images/bootstrap.png" width="100" height="100" alt=""/>
  </div>
  </div>

  <div className="flex flex-row justify-center">
  <div className="rounded p-1 nav-option mt-6" title="Firebase">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-green p-4 rounded bg-gradient-to-b from-orange-300 to-transparent" src="/images/firebase.png" width="100" height="100" alt=""/>
  </div>
  <div className="rounded p-1 nav-option mt-6" title="MongoDB">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-green p-4 rounded bg-gradient-to-b from-green-500 to-transparent" src="/images/mongodb.png" width="100" height="100" alt=""/>
  </div>
  <div className="rounded p-1 nav-option mt-6" title="MySQL">
   <Image className="object-cover w-20 rounded-t-lg h-20 border border-blue p-4 rounded bg-gradient-to-b from-sky-900 to-transparent" src="/images/mysql.png" width="100" height="100" alt=""/>
  </div>
  </div>

</div>

<div className="flex justify-center">
  <p>&copy; {new Date().getFullYear()}</p>
</div>

   </div>
  );
}

