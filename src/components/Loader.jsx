import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Loader = () => {
    return (
        <>
            {/* <Navbar/> */}


            <p className='w-fit mx-auto p-5 text-5xl sm:text-7xl font-extrabold 
            text-gray-200 animate-pulse'>Talkpod</p>


            <div className='h-screen w-full  text-white mx-auto text-center duration-1000
                my-2 p-5'>

                <div className='bg-violet-100 h-20 w-full rounded-lg animate-pulse'>Loading</div>

                <div className='flex space-x-5 mt-5'>
                    <div className='bg-purple-100 h-20 w-36 rounded-full animate-pulse'></div>
                    <div className='bg-red-100 h-20 w-full rounded-lg animate-pulse'>Loading</div>
                </div>


                <div className='bg-yellow-100 h-20 w-full rounded-lg animate-pulse mt-5 text-3xl font-extrabold'>
                    <p className='mx-auto w-fit'>Loading</p>
                </div>

                <div className='flex space-x-5 mt-5'>
                    <div className='bg-pink-100 h-20 w-full rounded-lg animate-pulse'>Loading</div>
                    <div className='bg-purple-100 h-20 w-36 rounded-full animate-pulse'></div>
                </div>

                <div className='flex space-x-5 mt-5'>
                    <div className='bg-blue-100 h-20 w-full rounded-lg animate-pulse'>Loading</div>
                    <div className='bg-green-100 h-20 w-full rounded-lg animate-pulse'>Loading</div>
                </div>

                <div className='bg-yellow-100 h-20 w-full rounded-lg animate-pulse mt-5 text-3xl font-extrabold'>
                    <p className='mx-auto w-fit'>Loading</p>
                </div>

                <div className='flex space-x-5 mt-5'>
                    <div className='bg-pink-100 h-20 w-full rounded-lg animate-pulse'>Loading</div>
                    <div className='bg-purple-100 h-20 w-36 rounded-full animate-pulse'></div>
                </div>

                <div className='flex space-x-5 mt-5'>
                    <div className='bg-blue-100 h-20 w-full rounded-lg animate-pulse'>Loading</div>
                    <div className='bg-green-100 h-20 w-full rounded-lg animate-pulse'>Loading</div>
                </div>

                <div className='h-10'></div>

            </div>

            

        </>
    )
}
