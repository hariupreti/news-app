import React from 'react'

export default function EachRecentNews() {
    const listStyle = "w-full bg-gray-100 cursor-pointer hover:text-blue-600 float-left text-xs border border-b-gray-300 p-4";
    return (
        <li className={listStyle}>
            <span className='font-semibold text-sm'>Trump's 2024 campaign has a different look, for now</span>
            <div className='flex mt-1 text-gray-500 text-xs float-right'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>&nbsp;| 
                1 hr
            </div>
        </li>
    )
}
