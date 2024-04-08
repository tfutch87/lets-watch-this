'use client'

import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
// import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Search() {

  // create a useState hook to capture the user input. when the user press search, when the results over to /Search/{search}

  const [userInput, SetUserInput] = useState('');
  const router = useRouter();

  const Search = (e) => {
    e.preventDefault();
    router.push(`/Search/${userInput}`)
    // console.log(userInput)

  
  }

  return (
    <>
       

  <form method='GET' action={'/Search/${userInput}'}>
  <div
  className="relative flex border-zinc-900 border-2 rounded-md px-4"
  data-twe-input-wrapper-init
  data-twe-input-group-ref>
  
  <input type='hidden' value={userInput} />
 
  <input
  onChange={(e) => SetUserInput(e.target.value)}
    type="search"
    value={userInput}
    className="peer block border-gray-200 min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
    placeholder="Search Anything..."
    aria-label="Search"
    id="exampleFormControlInput"
    aria-describedby="basic-addon1" />
  <label
    htmlFor="exampleFormControlInput"
    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
    >Search Anything...
  </label>
  <button
  onClick={Search}
    className="relative z-[2] -ms-0.5 flex items-center rounded-e bg-primary px-5  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
    type="button"
    id="button-addon1"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    <span className="[&>svg]:h-5 [&>svg]:w-5">


    <SearchIcon  />

    </span>
  </button>
  </div>
   </form>

    </>
  )
}
