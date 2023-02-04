import {React,useEffect,useState} from 'react'
import EachRecentNews from './subitems/EachRecentNews'

export default function RightSideItem({userInterests=[],toggle=()=> null }) {
    const [isLoading,setIsLoading] = useState(false);
    const [recentNews,setRecentNews] = useState([]);
    const [userinterest,setUserInterest] = useState(["value"]);
    
    const mostRecentNews = (value) => {
        if(value != null || (recentNews != null && recentNews.length < 1)){
            setIsLoading(true);
            axios.get(route('getMostRecent', {"interest":value})).then( response => {
                setRecentNews(response.data);
            });
            setIsLoading(false);
        }
    }

    const searchInterestedNews = (value) => {
        setUserInterest({"value":value});
        mostRecentNews(value);
    }

    useEffect(() => {
        if(recentNews != null && recentNews.length < 1){
            mostRecentNews()
        }
    });

    const otherListStyle = "w-fit h-fit bg-gray-200 cursor-pointer hover:text-blue-600 float-left px-2 py-1 m-1 rounded-lg text-xs";

    return (
        <div className='grid grid-flow-row'>
        <div className={`min-h-fit mb-10 ${(userInterests && userInterests.length < 1)?"hidden":"block"} `}>
        <h2 className='px-4 py-2 font-semibold text-gray-600 mb-3 pb-1 border border-b-2 border-b-gray-800'>You May Interested</h2>
            <div className=''>
                <ul> 
                    {
                        userInterests.map((interest,index) => {
                            return <li key={index} className={otherListStyle+` ${(interest.value == userinterest.value)?"bg-sky-200":""}`} onClick={() => searchInterestedNews(interest.value)}>{ interest.value }</li>
                        })
                    }
                </ul>
            </div>
        </div>
        <div className='h-3/4' id="#recentNewsShow">
            <h2 className='px-4 py-2 font-semibold text-gray-600 mb-3 pb-1 border border-b-2 border-b-gray-800'>{ isLoading ? "Searching....":(!isLoading && userInterests.value)?"On demand news":"Recent News" }</h2>
            <div className='w-full'>
                <ul>
                    {
                        ((recentNews && recentNews.length > 0) && !isLoading)? recentNews.map((eachNews,index) =>{
                                return <EachRecentNews key={index} news={eachNews} selectNews={(news) => toggle(news)}></EachRecentNews>
                        }): [1,2,3,4,5].map((index) => {
                            return <EachRecentNews key={index} news={[]}></EachRecentNews>
                        })
                    }
                </ul>
            </div>
        </div>
        </div>
    )
}
