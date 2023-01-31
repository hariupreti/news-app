import React, { useEffect, useState } from 'react'
import Loading from '../Utility/Loading';
import EachNews from './EachNews'
import NewsOnImageBackground from './NewsOnImageBackground'

export default function CenterNews() {
    const [breakingNews,setBreakingNews] = useState([]);

    const getBreakingNews = () => {
        axios.get(route('BreakingNews')).then( response => {
            setBreakingNews(response.data.articles);
        });
    }

    useEffect(() => {
        getBreakingNews()
    },[]);
    
    return (
    <>
    <h1 className='text-xl -mt-2 mb-4 font-semibold text-gray-500'>Breaking News</h1>
    {
        breakingNews && breakingNews.length > 0 ?
            <div className="grid lg:grid-cols-12 gap-1">
            <div className='lg:col-span-5 md:col-span-12'>
                <EachNews news={breakingNews[0]}></EachNews>
                <EachNews news={breakingNews[1]}></EachNews>
            </div>
            <div className='lg:col-span-7 md:col-span-12'>
                <NewsOnImageBackground news={breakingNews[2]}></NewsOnImageBackground>
            </div>
        </div>
        : <Loading></Loading>
    }
    <h1 className='text-xl mt-8 mb-4 font-semibold text-gray-500'>Business News</h1>
    {
        breakingNews && breakingNews.length > 0 ?
        <div className="grid lg:grid-cols-12 gap-1">
        <div className="lg:col-span-6 md:col-span-6"><EachNews news={breakingNews[4]}></EachNews></div>
        <div className="lg:col-span-6 md:col-span-6"><EachNews news={breakingNews[5]}></EachNews></div>
        <div className="lg:col-span-4 md:col-span-6"><EachNews news={breakingNews[6]}></EachNews></div>
        <div className="lg:col-span-4 md:col-span-6"><EachNews news={breakingNews[7]}></EachNews></div>
        <div className="lg:col-span-4 md:col-span-6"><EachNews news={breakingNews[8]}></EachNews></div>
        <div className="lg:col-span-8 md:col-span-6 "><EachNews news={breakingNews[9]}></EachNews></div>
        <div className="lg:col-span-4 md:col-span-6"><EachNews news={breakingNews[10]}></EachNews></div>
        <div className="lg:col-span-5 md:col-span-6 "><EachNews news={breakingNews[11]}></EachNews></div>
        <div className="lg:col-span-7 md:col-span-6"><EachNews news={breakingNews[12]}></EachNews></div>
        </div>
        : <Loading></Loading>
    }
    </>
    )
}
