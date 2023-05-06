import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Loader = () => {
    return (
        <>
            {/* <Navbar/> */}





            <div className='my-36 h-72 w-full sm:w-[32rem] px-3 sm:px-20 py-8 text-white mx-auto text-center duration-1000'>

                <p className='font-bold text-violet-500 text-xl sm:text-2xl'>
                    Take a breath 😤
                </p>

                <div className='mt-10 flex justify-between'>

                    <div className="w-12 h-12 mx-auto rounded-full animate-spin
                        border-8 border-solid border-green-600 border-t-transparent">
                    </div>

                    <div className="hidden sm:block w-12 h-12 mx-auto rounded-full animate-spin
                        border-8 border-solid border-yellow-300 border-t-transparent">
                    </div>

                    <div className="w-12 h-12 mx-auto rounded-full animate-spin
                        border-8 border-solid border-rose-500 border-t-transparent">
                    </div>


                </div>


                <p className='mt-10 text-sm font-bold text-violet-500'>Processing...</p>
            </div>

        </>
    )
}
