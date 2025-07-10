
export default function Navbar() {
  return (
   
<nav>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div></div>

  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <button type="button" className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">hire me</button>
  </div>

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 rounded-4xl border border-gray-800 p-2 backdrop-blur-sm bg-white/30 dark:bg-gray-800">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="#" className="flex block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:dark:text-white-500 text-sm" aria-current="page">
          <svg className="w-5 h-5 text-white-800 dark:text-white hover:text-gray-500 text-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
          </svg>
          <span className="mx-2 text-white hover:text-gray-500">Home</span>
        </a> 
      </li>
      <li className="border border-gray-300"></li>
      <li>
        <a href="#" className="text-sm flex block md:p-0 text-white-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
        <svg className="w-5 h-5 text-white-800 dark:text-white hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
        </svg>
        <span className="mx-2 text-white hover:text-gray-500">Work</span>
        </a>
      </li>
      <li>
        <a href="#" className="text-sm flex block md:p-0 text-white-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white-700 md:dark:hover:text-white-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          <svg className="w-5 h-5 text-white-800 dark:text-white hover:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
         </svg>
         <span className="mx-2 text-white hover:text-gray-500">Projects</span>
        </a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  );
}


