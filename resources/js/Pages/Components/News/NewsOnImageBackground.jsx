import React from 'react'

export default function NewsOnImageBackground() {
    return (
    <div className="bg-[url('https://english.onlinekhabar.com/wp-content/uploads/2016/01/IMG_9388-1-1024x476.jpg')] min-h-[400px] p-6 border-4 border-white rounded-lg cursor-pointer opacity-90 hover:opacity-100">
        <div className='relative text-slate-500 text-sm'>2 hours ago</div>
        <div className='relative bg-white w-full mt-60 p-2 float-left place-content-start shadow-lg opacity-80 rounded-lg'>
            <div className=' font-semibold text-2xl '>News heading goes here</div>
            <div >News goes here in a small context News goes here in a small contextNews goes here in a small contextNews goes here in a small context</div>
        </div>
    </div>
    )
}
