import React, { useEffect, useState } from 'react'
import EachNews from './EachNews';
import TextInput from '@/Components/TextInput';
import ComponentLoading from '../Utility/ComponentLoading';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm } from '@inertiajs/react';
import axios from 'axios';

export default function LeftSideItem({headlines,toggle=()=> null }) {
    const [errorMsg,setErrorMsg] = useState("");
    const [searchArticles,setSearchArticles] = useState([]);
    const [isLoading,setIsLoading] = useState({loading:false});
    const { data, setData, post, processing, errors, reset } = useForm({
        article: "",
        publishDate: new Date(),
    });

    const onHandleChange = (event) => {
        setData(event.target.name,event.target.value);
    };

    const submit = async (e) => {
        e.preventDefault();
        setIsLoading({loading:true});
        setErrorMsg();
        axios.post(route('ArticlesSearch'),data).then( response => {
            if(response.data.articles && response.data.articles.length > 0){
                setSearchArticles(response.data.articles);
            }else{
                setErrorMsg("No any articles found in your search criteria.");
            }
        }).catch( errorResponse => {
            setErrorMsg(errorResponse.response.data.message);
        });
        setTimeout(() => {
            setIsLoading({loading:false});
        }, 3000);
    };

    return (
            <><div className='min-w-100px'>
                <div className='p-4 text-xs text-gray-400'>Top articles for you
                    <div className='p-1 mt-4'>
                        <TextInput handleChange={(e) => onHandleChange(e)} name="article" placeholder="Search articles" className={`${(data.article && data.article.length > 2)?"rounded-b-none":""} w-full text-gray-800 outline-none border-none active:outline-none bg-gray-100 focus:ring-0 focus:outline-none max-h-10 border-gray-100`}></TextInput>
                        <div className={`bg-gray-100 border-gray-200 border border-t-0 p-4 rounded-b-md ${(data.article && data.article.length > 2)?"block":"hidden"}`}>
                        { errorMsg != "" && <span className='text-sm text-red-600 transition-all delay-100'>{errorMsg}</span>}
                        <div className='grid grid-flow-col grid-cols-2 mt-2'>
                            <div>
                                <InputLabel className={"text-xs m-1 text-gray-400"}>Date From</InputLabel>
                                <DatePicker className='rounded-md h-9 w-[94%] outline-none ring-0 focus:outline-none focus:ring-0' selected={data.publishDate} onChange={(date) => setData('publishDate',date)} />
                            </div>
                            <div className='mx-auto my-auto mt-6'>
                                {
                                    isLoading.loading ?
                                    <PrimaryButton className='normal-case ring-0 focus:none outline-none border-none' processing={true}>Searching...</PrimaryButton>
                                    :
                                    <PrimaryButton className='normal-case ring-0 focus:none outline-none border-none' onClick={(e) => submit(e) }>Filter Articles</PrimaryButton>
                                }
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                (searchArticles && searchArticles.length > 0) ?
                <div className='grid grid-flow-col grid-cols-6 font-semibold shadow-sm m-1 p-1 bg-slate-50'>
                <div className='col-span-5'><h1 className='mt-2'>Search Results</h1></div>
                <div><span className='bg-slate-100 cursor-pointer hover:bg-slate-200 p-2 rounded-md float-right' onClick={ () => setSearchArticles([]) }>X</span></div>
                </div>
                :
                <h1 className='m-2 p-2 font-semibold shadow-sm'>Top headlines</h1>
            }
            <div className='grid grid-flow-row'>
            {
                (searchArticles && searchArticles.length > 0) ?
                <div>
                {
                    searchArticles ?
                    searchArticles.map((eachHeadline,index) =>  {
                        return <EachNews selectNews={(news) => toggle(news)}  key={index} news={eachHeadline}></EachNews>
                    })
                    :<><div className='grid grid-flow-row gap-3 mb-20'>  <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> </div></>
                }
                </div>
                :
                <div>
                    {
                        headlines ?
                        headlines.map((eachHeadline,index) =>  {
                            return <EachNews selectNews={(news) => toggle(news)}  key={index} news={eachHeadline}></EachNews>
                        })
                        :<><div className='grid grid-flow-row gap-3 mb-20'>  <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> </div></>
                    }
                </div>
            }

                <div>
                    {
                        headlines ?
                        headlines.map((eachHeadline,index) =>  {
                            return <EachNews selectNews={(news) => toggle(news)}  key={index} news={eachHeadline}></EachNews>
                        })
                        :<><div className='grid grid-flow-row gap-3 mb-20'>  <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> </div></>
                    }
                </div>
            </div>
            </>
    )
}