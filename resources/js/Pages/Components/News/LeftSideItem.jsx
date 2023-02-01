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

export default function LeftSideItem({headlines}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        article: "",
        publishDate: new Date(),
        source: "",
        category: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name,event.target.value);
    };

    const onCategoryChange = (event) => {
        setData('category',event.value);
    };

    const onSourceChange = (event) => {
        setData('source',event.value);
    };

    const submit = async (e) => {
        e.preventDefault();
        post(route('ArticlesSearch'),{
            onSuccess: (data) => {
                console.log(data);
            }
        });
        // let response = await axios.post(route('personalAccessToken',data));
        // if(response.status == 201){
        //     reset('token_name');
        //     reset('expiration');
        //     reset('abilities');
        //     setAccessToken(response.data.accessToken);
        //     refreshDatatableComponent("createdOperation");
        //     toast.success(response.data.message);
        // }else{
        //     toast.error(response.data.message);
        // }
    };

    const category = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const sources = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
            <><div className='min-w-100px'>
                <div className='p-4 text-xs text-gray-400'>Top articles for you
                    <div className='p-1 mt-4'>
                        <TextInput handleChange={(e) => onHandleChange(e)} name="article" placeholder="Search articles" className={`${(data.article && data.article.length > 2)?"rounded-b-none":""} w-full text-gray-800 outline-none border-none active:outline-none bg-gray-100 focus:ring-0 focus:outline-none max-h-10 border-gray-100`}></TextInput>
                        <div className={`bg-gray-100 border-gray-200 border border-t-0 p-4 rounded-b-md ${(data.article && data.article.length > 2)?"block":"hidden"}`}>
                        <div className='grid grid-flow-col grid-cols-2 mt-2'>
                            <div>
                                <InputLabel className={"text-xs m-1 text-gray-400"}>Published Date</InputLabel>
                                <DatePicker className='rounded-md h-9 w-[94%] outline-none ring-0 focus:outline-none focus:ring-0' selected={data.publishDate} onChange={(date) => setData('publishDate',date)} />
                                { errors.publishDate && <span className='text-sm text-red-600 transition-all delay-100'>{errors.publishDate}</span>}
                            </div>
                            <div>
                                <InputLabel className={"text-xs m-1 text-gray-400"}>News Category</InputLabel>
                                <Select options={category} onChange={ (e) => onCategoryChange(e) } />
                                { errors.category && <span className='text-sm text-red-600 transition-all delay-100'>{errors.category}</span>}
                            </div>
                        </div>
                        <div className='grid grid-flow-col grid-cols-2 mt-2'>
                            <div>
                                <InputLabel className={"text-xs m-1 text-gray-400"}>News Sources</InputLabel>
                                <Select options={sources} onChange={ (e) => onSourceChange(e) } />
                                { errors.source && <span className='text-sm text-red-600 transition-all delay-100'>{errors.source}</span>}
                            </div>
                            <div className='mx-auto my-auto mt-6'>
                                <PrimaryButton onClick={(e) => submit(e) }>Filter Articles</PrimaryButton>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='m-2 p-2 font-semibold shadow-sm'>Top headlines</h1>
            <div className='grid grid-flow-row'>
                <div>
                    {
                        headlines ?
                        headlines.map((eachHeadline,index) =>  {
                            return <EachNews key={index} news={eachHeadline}></EachNews>
                        })
                        :<><div className='grid grid-flow-row gap-3 mb-20'>  <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> <ComponentLoading></ComponentLoading> </div></>
                    }
                </div>
            </div>
            </>
    )
}
