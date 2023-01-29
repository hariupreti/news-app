import InputLabel from '@/Components/InputLabel';
import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';
import EachNews from './Components/News/EachNews';
import LeftSideItem from './Components/News/LeftSideItem';
import MainNews from './Components/News/MainNews';
import RightSideItem from './Components/News/RightSideItem';
import Loading from './Components/Utility/Loading';

export default function Welcome(props) {
    return (
        <Guest props={props}>
            <Head title="Welcome" />
            <div className="overflow-x-hidden items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className='max-w-full p-2 m-2 grid grid-flow-col grid-cols-12'>
                    <LeftSideItem></LeftSideItem>
                    <div className='col-span-7 m-4'>
                    {/* <Loading></Loading> */}
                    <MainNews></MainNews>
                    <div class="grid grid-cols-5 gap-4">
                    <div class="col-span-3"><EachNews></EachNews></div>
                    <div class="col-span-2"><EachNews></EachNews></div>
                    <div class="col-span-2 "><EachNews></EachNews></div>
                    <div class="col-span-3"><EachNews></EachNews></div>
                    </div>
                    </div>
                    <RightSideItem></RightSideItem>
                </div>
            </div>
        </Guest>
    );
}
