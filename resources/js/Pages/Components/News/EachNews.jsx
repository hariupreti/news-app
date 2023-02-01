import React from 'react'

export default function EachNews({news}) {
    const rawHtml = news && news['description'] ? news['description']:"";
    return (
        <div className='grid grid-flow-col grid-cols-10 m-2 p-2 border rounded-md bg-gray-50 border-gray-100 cursor-pointer hover:bg-gray-200'>
            <div className='col-span-3'>
                <img className='object-cover p-4' src={news && news['urlToImage'] ? news['urlToImage']:""} width={120} height={120} />
            </div>
            <div className='col-span-7 grid grid-flow-row'>
                <div>
                <h1 className='text-md font-semibold text-sm'>{ news && news['title'] ? news['title']:""}</h1>
                <span className='text-sm text-ellipsis ' dangerouslySetInnerHTML={{ __html: rawHtml }}></span>
                <div className='grid grid-flow-col grid-cols-2 text-ellipsis overflow-hidden'>
                    <div className='text-sm font-serif mt-1 text-gray-500'> { news && news['author'] ? news['author']:""} </div>
                    <div className=' place-content-end text-end'>
                        <div className='text-xs mt-1 text-gray-400 float-right'>{ news && news['publishedAt'] ? news['publishedAt']:""}</div>
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
