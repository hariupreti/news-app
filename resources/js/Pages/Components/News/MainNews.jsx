import React from 'react'

export default function MainNews({mainNews=[],toggle=()=>null}) {
    const goback = () => {
        toggle([],true);
    }
    const rawHtml = mainNews && mainNews['description'] ? mainNews['description']:"";
    return (
            <div className='grid grid-flow-row'>
            <div className='flex bg-white p-2 rounded-t-md'>
            <div title='Go back' onClick={() => goback()} className='h-10 w-1/12 bg-gray-600 cursor-pointer hover:bg-gray-900 rounded-full rounded-r-md'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full text-xs text-gray-400 p-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <div className='w-11/12 bg-gray-300 rounded-r-md'>
                <div className='p-1 mx-4 mt-1 font-semibold text-ellipsis'>{ mainNews.title && mainNews.title.substring(0,90)+"..." }</div>
            </div>
            </div>
            <div className='grid grid-flow-col grid-cols-12 bg-white/90 p-4 rounded-t-md border-gray-400'>
            <div className='col-span-5'>
                {
                    mainNews.contentfromlink ?
                    <div>
                        <div className='grid grid-flow-col grid-cols-10 m-2 p-2 border rounded-md bg-gray-50 border-gray-100 cursor-pointer hover:bg-gray-200'>
                        <div className='col-span-10 grid grid-flow-row'>
                        <div>
                        <h1 className='text-md font-semibold text-sm'>{ mainNews && mainNews['title'] ? mainNews['title']:""}</h1>
                        <div className='bg-white px-10 py-14 rounded-md mx-auto text-sm m-4 text-gray-500'>Image not available or origin block to load web content</div>
                        <div className='grid grid-flow-col grid-cols-2 text-ellipsis overflow-hidden'>
                        <div className='text-sm font-serif mt-1 text-gray-500'> { mainNews && mainNews['author'] ? mainNews['author']:""} </div>
                        <div className=' place-content-end text-end'>
                        <div className='text-xs mt-1 text-gray-400 float-right'>{ mainNews && mainNews['publishedAt'] ? mainNews['publishedAt']:""}</div>
                        <div className='float-right text-start'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mt-1 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg></div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    :
                    <img className='object-cover p-4' src={ mainNews && mainNews['urlToImage'] ? mainNews['urlToImage']:"" }/>
                }
            </div>
            <div className='col-span-7 grid grid-flow-row p-2 gap-0 space-0'>
                <div className=''>
                    <div className='grid grid-flow-col'>
                        <div className='text-blue-500 font-semibold cursor-pointer'>
                            { mainNews.author }
                        </div>
                        <div className='text-end text-xs text-gray-400'>
                            { mainNews.publishedAt }
                        </div>
                    </div>
                    <div className='mt-4 font-semibold text-xl'>{ mainNews.title }</div>
                    <div className='font-extralight indent-10 mt-6'>{ mainNews.description }</div>
                </div>
            </div>
            </div>
            <div className='grid bg-white/90 p-4 rounded-b-md border-gray-400'>
            <div className='min-h-screen'>
                <span className='text-sm text-ellipsis ' dangerouslySetInnerHTML={{ __html: rawHtml }}></span>
            </div>
            </div>
            </div>
    )
}
