import React from 'react'

export default function NewsOnImageBackground({news}) {
    const backgroundImage = news['urlToImage'] ? news['urlToImage'] : ""
    const rawHtml = news && news['description'] ? news['description']:"";

    return (
    <div className={`bg-[url('https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/dedc7c6fda52d16de9b1f876ee0e2416.jpg')] min-h-[400px] p-6 border-4 border-white rounded-lg cursor-pointer opacity-90 hover:opacity-100`}>
        <div className='relative text-slate-500 text-sm'>{ news && news['publishedAt'] ? news['publishedAt']:""}</div>
        <div className='relative bg-white w-full mt-60 p-2 float-left place-content-start shadow-lg opacity-90 rounded-lg'>
            <div className=' font-semibold text-2xl '>{ news && news['title'] ? news['title']:""}</div>
            <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
        </div>
    </div>
    )
}
