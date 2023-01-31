import React from 'react'
import EachNews from './EachNews'
import TextInput from '@/Components/TextInput'
import ComponentLoading from '../Utility/ComponentLoading'

export default function LeftSideItem({headlines}) {
    return (
            <><div className='min-w-100px'>
                <div className='p-4 text-xs text-gray-400'>Top articles for you
                    <div className='p-1 mt-4'>
                        <TextInput placeholder="Search articles" className="w-full outline-none border-none active:outline-none bg-gray-100 focus:ring-0 focus:outline-none max-h-10 border-gray-100"></TextInput>
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
                        :<> <ComponentLoading></ComponentLoading> </>
                    }
                </div>
            </div>
            </>
    )
}
