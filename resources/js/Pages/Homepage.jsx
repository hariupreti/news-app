import InputLabel from '@/Components/InputLabel';
import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';
import Footer from './Components/Footer';
import CenterNews from './Components/News/CenterNews';
import EachNews from './Components/News/EachNews';
import LeftSideItem from './Components/News/LeftSideItem';
import MainNews from './Components/News/MainNews';
import NewsOnImageBackground from './Components/News/NewsOnImageBackground';
import RightSideItem from './Components/News/RightSideItem';
import Loading from './Components/Utility/Loading';

export default function Homepage(props) {
    return (
        <Guest props={props}>
            <Head title="Welcome" />
            <div className="overflow-x-hidden items-top justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 max-h-fit">
                { props.error && <div className='p-4 bg-red-300 '>
                <div>There is an issue occured while fetching news:</div>
                <span className='text-xs indent-20'>{props.error}</span>
                </div> }
                <div className='max-w-full p-2 m-2 grid lg:grid-flow-col lg:grid-cols-12 min-h-min'>
                    <div className='bg-white lg:col-span-3 md:col-span-6 rounded-lg shadow-lg'>
                    <LeftSideItem headlines={props.topHeadlines.articles}></LeftSideItem>
                    </div>
                    <div className='lg:col-span-7 md:row-span-6 m-4 sm:float-left'>
                        <CenterNews></CenterNews>
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
