import React from 'react'

export default function NewsOnImageBackground({news,selectNews=()=>null}) {
    const backgroundImage = news['urlToImage'] ? news['urlToImage'] : ""
    const rawHtml = news && news['description'] ? news['description']:"";

    const viewMainNews = (news) => {
        selectNews(news);
    }

    return (
    <div onClick={(e) => viewMainNews(news)} className={`min-h-[400px] border-4 border-white rounded-lg cursor-pointer opacity-90 hover:opacity-100`}>
        { backgroundImage != "" && <img src={backgroundImage} className="w-full h-70 rounded-md"></img>}
        <div className='-mt-80'>
        <div className='relative w-fit bg-slate-800 text-slate-500 text-sm -mt-40 p-2 lg:block sm:hidden'>{ news && news['publishedAt'] ? news['publishedAt']:""}</div>
        <div className='relative bg-white w-full mt-60 p-2 float-left place-content-start shadow-lg opacity-90 rounded-lg'>
            <div className=' font-semibold text-2xl text-ellipsis '>{ news && news['title'] ? news['title']:""}</div>
            <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
        </div>
        </div>
    </div>
    )
}
