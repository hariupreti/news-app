import React from 'react'

export default function Loading() {
    return (
        <div className="w-full inline-block animate-pulse p-20 rounded-md bg-white place-content-center mx-auto sm:px-6 lg:px-8">
        <div className="w-full pt-8 sm:justify-start sm:pt-0">
        <div className='grid place-content-center mb-4'><img src={"assets/logo.png"} height={50} width={50} className="animate-pulse delay-1000 duration-1000" /></div>
        </div>
        <div className="space-y-6 py-1">
        <div className="h-10 bg-slate-200 rounded"></div>
        <div className="space-y-3">
        <div className="grid grid-cols-3 gap-4">
        <div className="h-12 bg-slate-200 rounded col-span-2"></div>
        <div className="h-8 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div className="h-20 bg-slate-200 rounded"></div>
        </div>
        </div>
        </div>
    )
}
