import InputLabel from '@/Components/InputLabel';
import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';
import Footer from './Components/Footer';
import EachNews from './Components/News/EachNews';
import LeftSideItem from './Components/News/LeftSideItem';
import MainNews from './Components/News/MainNews';
import NewsOnImageBackground from './Components/News/NewsOnImageBackground';
import RightSideItem from './Components/News/RightSideItem';
import Loading from './Components/Utility/Loading';

export default function Welcome(props) {
    return (
        <Guest props={props}>
            <Head title="Welcome" />
            <div className="overflow-x-hidden items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className='max-w-full p-2 m-2 grid lg:grid-flow-col lg:grid-cols-12'>
                    <div className='bg-white lg:col-span-3 md:col-span-6 min-h-screen rounded-lg shadow-lg'>
                    <LeftSideItem></LeftSideItem>
                    </div>
                    <div className='lg:col-span-7 md:row-span-6 m-4 sm:float-left'>
                        <h1 className='text-xl -mt-2 mb-4 font-semibold text-gray-500'>Breaking News</h1>
                        {/* <MainNews></MainNews> */}
                        <div className="grid lg:grid-cols-12 gap-1">
                            <div className="lg:col-span-6 md:col-span-6"><EachNews></EachNews></div>
                            <div className="lg:col-span-6 md:col-span-6"><EachNews></EachNews></div>
                            <div className="lg:col-span-4 md:col-span-6"><EachNews></EachNews></div>
                            <div className="lg:col-span-4 md:col-span-6"><EachNews></EachNews></div>
                            <div className="lg:col-span-4 md:col-span-6"><EachNews></EachNews></div>
                            <div className="lg:col-span-8 md:col-span-6 "><EachNews></EachNews></div>
                            <div className="lg:col-span-4 md:col-span-6"><EachNews></EachNews></div>
                            <div className="lg:col-span-5 md:col-span-6 "><EachNews></EachNews></div>
                            <div className="lg:col-span-7 md:col-span-6"><EachNews></EachNews></div>
                        </div>
                        <h1 className='text-xl mt-8 mb-4 font-semibold text-gray-500'>Business News</h1>
                        <div className="grid lg:grid-cols-12 gap-1">
                            <div className='lg:col-span-5 md:col-span-12'>
                            <EachNews></EachNews>
                            <EachNews></EachNews>
                            <EachNews></EachNews>
                            </div>
                            <div className='lg:col-span-7 md:col-span-12'>
                                <NewsOnImageBackground></NewsOnImageBackground>
                            </div>

                        </div>
                    </div>
                    <div className='lg:col-span-2 md:row-span-6 border-0 border-l border-dashed border-gray-300 mt-10 shadow-sm'>
                    <RightSideItem></RightSideItem>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </Guest>
    );
}
