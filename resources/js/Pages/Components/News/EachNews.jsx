import React from 'react'

export default function EachNews() {
    return (
        <div className='grid grid-flow-col grid-cols-10 m-2 p-2 border rounded-md bg-gray-50 border-gray-100 cursor-pointer hover:bg-gray-200'>
            <div className='col-span-3'>
                <img className='object-cover' src="https://ichef.bbci.co.uk/news/976/cpsprodpb/8657/production/_128419343_adani.jpg.webp" width={120} height={120} />
            </div>
            <div className='col-span-7 grid grid-flow-row'>
                <div>
                <h1 className='text-md font-semibold text-sm'>Adani Group: Fortune of Asia's richest man hit by fraud claims</h1>
                <span className='text-sm text-ellipsis '>A court document filed by prosecutors on Friday alleges that Bankman-Fried messaged ...</span>
                <div className='grid grid-flow-col grid-cols-2'>
                    <div className='text-sm font-serif mt-1 text-gray-500'> Cheyenne Ligon</div>
                    <div className=' place-content-end text-end'>
                        <div className='text-xs mt-1 text-gray-400 float-right'>3 hours ago</div>
                        <div className='float-right text-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></div>
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
