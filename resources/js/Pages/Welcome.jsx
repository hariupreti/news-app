import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';
import EachNews from './Components/EachNews';

export default function Welcome(props) {
    return (
        <Guest props={props}>
            <Head title="Welcome" />
            <div className=" overflow-x-hidden items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                {/* <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <img src={"assets/logo.png"} height={120} width={120} />
                    </div>
                    <div className='text-center text-2xl font-bold'>NewsApp</div>
                </div> */}
                <div className='max-w-full p-2 m-2 grid grid-flow-col grid-cols-12'>
                    <div className='bg-white col-span-3 min-h-screen rounded-lg shadow-lg'>
                        <div className='min-w-100px'>
                            <div className='p-4 text-xs text-gray-400'>Top articles for you
                                <div className='p-1 mt-4'>
                                    <TextInput placeholder="Search articles" className="w-full outline-none border-none active:outline-none bg-gray-100 focus:ring-0 focus:outline-none max-h-10 border-gray-100"></TextInput>
                                </div>
                            </div>
                        </div>
                        <h1 className='m-2 p-2 font-semibold shadow-sm'>Top headlines</h1>
                        <div className='grid grid-flow-row'>
                            <div>
                                <EachNews></EachNews>
                                <EachNews></EachNews>
                                <EachNews></EachNews>
                                <EachNews></EachNews>
                                <EachNews></EachNews>
                                <EachNews></EachNews>
                                <EachNews></EachNews>
                                <EachNews></EachNews>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-7'></div>
                    <div className='col-span-2 border-0 border-l border-dashed border-gray-300 mt-10 shadow-sm'>
                        <h2 className='px-4 py-2 font-semibold text-gray-600 mb-3 pb-1 border border-b-2 border-b-gray-800'>News Categories</h2>
                        <div className=''>
                            <ul>
                                <li className='w-fit h-fit bg-gray-200 cursor-pointer hover:text-blue-600 float-left px-2 py-1 m-1 rounded-lg text-xs'>Business</li>
                                <li className='w-fit h-fit bg-gray-200 cursor-pointer hover:text-blue-600 float-left px-2 py-1 m-1 rounded-lg text-xs'>Entertainment</li>
                                <li className='w-fit h-fit bg-gray-200 cursor-pointer hover:text-blue-600 float-left px-2 py-1 m-1 rounded-lg text-xs'>Health</li>
                                <li className='w-fit h-fit bg-gray-200 cursor-pointer hover:text-blue-600 float-left px-2 py-1 m-1 rounded-lg text-xs'>Sports</li>
                                <li className='w-fit h-fit bg-gray-200 cursor-pointer hover:text-blue-600 float-left px-2 py-1 m-1 rounded-lg text-xs'>Science</li>
                                <li className='w-fit h-fit bg-gray-200 cursor-pointer hover:text-blue-600 float-left px-2 py-1 m-1 rounded-lg text-xs'>General</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
