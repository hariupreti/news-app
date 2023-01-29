import React from 'react'
import EachRecentNews from './subitems/EachRecentNews'

export default function RightSideItem() {
    const otherListStyle = "w-fit h-fit bg-gray-200 cursor-pointer hover:text-blue-600 float-left px-2 py-1 m-1 rounded-lg text-xs";
    return (
        <div className='col-span-2 border-0 border-l border-dashed border-gray-300 mt-10 shadow-sm'>
        <div className='grid grid-flow-row max-h-screen'>
        <div className='h-3/4'>
            <h2 className='px-4 py-2 font-semibold text-gray-600 mb-3 pb-1 border border-b-2 border-b-gray-800'>Most Recents</h2>
            <div className='w-full'>
                <ul>
                    <EachRecentNews></EachRecentNews>
                    <EachRecentNews></EachRecentNews>
                    <EachRecentNews></EachRecentNews>
                    <EachRecentNews></EachRecentNews>
                    <EachRecentNews></EachRecentNews>
                    <EachRecentNews></EachRecentNews>
                </ul>
            </div>
        </div>
        <div>
        <h2 className='px-4 py-2 font-semibold text-gray-600 mb-3 pb-1 border border-b-2 border-b-gray-800'>Other Sources</h2>
            <div className=''>
                <ul>
                    <li className={otherListStyle}>Business</li>
                    <li className={otherListStyle}>Entertainment</li>
                    <li className={otherListStyle}>Health</li>
                    <li className={otherListStyle}>Sports</li>
                    <li className={otherListStyle}>Science</li>
                    <li className={otherListStyle}>General</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    )
}
