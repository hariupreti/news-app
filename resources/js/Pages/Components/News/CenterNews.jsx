import React, { useEffect, useState } from 'react'
import Loading from '../Utility/Loading';
import EachNews from './EachNews'
import NewsOnImageBackground from './NewsOnImageBackground'

export default function CenterNews({toggle=()=>null}) {
    const [breakingNews,setBreakingNews] = useState([]);

    const getBreakingNews = () => {
        axios.get(route('BreakingNews')).then( response => {
            setBreakingNews(response.data.breakingNews);
        });
    }

    const viewMainNews = (news) => {
        toggle(news);
    }

    useEffect(() => {
        getBreakingNews()
    },[]);
    
    return (
    <div className=''>
        <h1 className='text-xl -mt-2 mb-4 font-semibold text-gray-500'>Breaking News</h1>
        {
            breakingNews && breakingNews.length > 0 && breakingNews.length > 2 ?
                <div className="grid lg:grid-cols-12 gap-1">
                <div className='lg:col-span-5 md:col-span-12'>
                    <EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[0]}></EachNews>
                    <EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[1]}></EachNews>
                </div>
                <div className='lg:col-span-7 md:col-span-12'>
                    <NewsOnImageBackground selectNews={(news) => viewMainNews(news)} news={breakingNews[2]}></NewsOnImageBackground>
                </div>
            </div>
            : <Loading></Loading>
        }
        <h1 className='text-xl mt-8 mb-4 font-semibold text-gray-500'>Business News</h1>
        {
            breakingNews && breakingNews.length > 2 && breakingNews.length > 11 ?
            <div className="grid lg:grid-cols-12 gap-1">
            <div className="lg:col-span-6 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[4]}></EachNews></div>
            <div className="lg:col-span-6 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[5]}></EachNews></div>
            <div className="lg:col-span-4 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[6]}></EachNews></div>
            <div className="lg:col-span-4 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[7]}></EachNews></div>
            <div className="lg:col-span-4 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[8]}></EachNews></div>
            <div className="lg:col-span-8 md:col-span-6 "><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[9]}></EachNews></div>
            <div className="lg:col-span-4 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[10]}></EachNews></div>
            <div className="lg:col-span-5 md:col-span-6 "><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[11]}></EachNews></div>
            <div className="lg:col-span-7 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[12]}></EachNews></div>
            </div>
            : <Loading></Loading>
        }
        <h1 className='text-xl mt-8 mb-4 font-semibold text-gray-500'>Technology around world</h1>
        {
            breakingNews && breakingNews.length > 11 && breakingNews.length > 20 ?
            <div className="grid lg:grid-cols-12 gap-1">
            <div className="lg:col-span-6 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[13]}></EachNews></div>
            <div className="lg:col-span-6 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[14]}></EachNews></div>
            <div className="lg:col-span-4 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[15]}></EachNews></div>
            <div className="lg:col-span-4 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[16]}></EachNews></div>
            <div className="lg:col-span-4 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[17]}></EachNews></div>
            <div className="lg:col-span-8 md:col-span-6 "><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[18]}></EachNews></div>
            <div className="lg:col-span-4 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[19]}></EachNews></div>
            <div className="lg:col-span-5 md:col-span-6 "><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[20]}></EachNews></div>
            <div className="lg:col-span-7 md:col-span-6"><EachNews selectNews={(news) => viewMainNews(news)} news={breakingNews[21]}></EachNews></div>
            </div>
            : <Loading></Loading>
        }
    </div>
    )
}
