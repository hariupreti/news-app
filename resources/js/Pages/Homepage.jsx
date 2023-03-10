import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import Footer from './Components/Footer';
import CenterNews from './Components/News/CenterNews';
import LeftSideItem from './Components/News/LeftSideItem';
import MainNews from './Components/News/MainNews';
import RightSideItem from './Components/News/RightSideItem';

export default function Homepage(props) {
    const [showMessage,setShowMessage] = useState({showmessage:props.message != null ? true : false});
    const [showMain,setShowMain] = useState({show:false});
    const [mainNews,setMainNews] = useState([]);

    const toogleMain = (news,check=false) => {
        setMainNews(news);
        setShowMain({show:true});
        if(check){
            setShowMain({show:false});
        }
        window.scrollTo({
            top: 10,
            left: 10,
            behavior: 'smooth'
        });
    }

    useEffect(()=> {
        if(showMessage.showmessage){
            setTimeout(() => {
                let newChage = {showmessage:!showMessage};
                setShowMessage(newChage);
            },3000);
        }
    });

    return (
        <Guest props={props}>
            <Head title="Welcome" />
            <div className="overflow-x-hidden items-top justify-center bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0 max-h-fit">
                { props.error && <div className='p-4 bg-red-300 '>
                <div>There is an issue occured while fetching news:</div>
                <span className='text-xs indent-20'>{props.error}</span>
                </div> }
                {
                <div className={`${showMessage.showmessage?"block":"hidden"}`}>
                <div className={`p-4 bg-green-300 mx-auto `}>
                <div className='font-semibold'>{props.message}</div>
                </div>
                </div>
                }
                <div className='max-w-full p-2 m-2 grid lg:grid-flow-col lg:grid-cols-12 min-h-min'>
                    <div className={`${(showMain.show)?"hidden":"bg-white lg:col-span-3 md:col-span-6 rounded-lg shadow-lg"}`} >
                    <LeftSideItem headlines={props.topHeadlines.data} toggle={(e) => toogleMain(e)}></LeftSideItem>
                    </div>
                    {
                    showMain.show ?
                    <div className={`${(showMain.show)?"lg:col-span-10 md:row-span-6 m-4 sm:float-left ":"lg:col-span-9 md:row-span-6 m-4 sm:float-left"}`}>
                        <MainNews toggle={(news) => toogleMain(news,true)} mainNews={mainNews}></MainNews>
                    </div>
                    :
                    <div className='lg:col-span-7 md:row-span-6 m-4 sm:float-left'>
                        <CenterNews toggle={(news) => toogleMain(news)}></CenterNews>
                    </div>
                    }
                    <div className='lg:col-span-2 md:row-span-6 border-0 border-l border-dashed border-gray-300 mt-10 shadow-sm'>
                        <RightSideItem userInterests={props.interests}  toggle={(e) => toogleMain(e)}></RightSideItem>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </Guest>
    );
}
