import React from 'react'

export default function 
() {
  return (
    <div className="container py-2 px-4">

    <h2> Movie Search</h2>
    <div className="py-2 no-scroll" style={{overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}>
        <ul className="flex space-x-4 list-none">
            <li className="border-zinc-900 cursor-pointer border-2 rounded-md px-4"> action </li>
            <li className="border-zinc-900 cursor-pointer border-2 rounded-md px-4"> thriller </li>
            <li className="border-zinc-900 cursor-pointer border-2 rounded-md px-4"> drama </li>
            <li className="border-zinc-900 cursor-pointer border-2 rounded-md px-4"> comedy </li>
            <li className="border-zinc-900 cursor-pointer border-2 rounded-md px-4"> horror </li>
            <li className="border-zinc-900 cursor-pointer border-2 rounded-md px-4"> romance </li>
            <li className="border-zinc-900 cursor-pointer border-2 rounded-md px-4"> sci-fi </li>
         
        </ul>
    </div>

    </div>
  )
}
