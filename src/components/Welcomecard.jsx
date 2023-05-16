import React from 'react'
import { Navbar } from "./Navbar"
import { Link } from 'react-router-dom'



export const Welcomecard = () => {
    return (
        <>
            <Navbar />
            
            <div className='my-36 h-80 w-full sm:w-[32rem] px-2 sm:px-20 py-8  
            text-white mx-auto text-center
            bg-gradient-to-r from-violet-950 to-purple-600 sm:rounded-lg 
            hover:shadow-2xl hover:shadow-violet-900 duration-1000'>


                <div>
                    <p className='font-semibold text-xl sm:text-2xl'>😌 Welcome to Talkpod</p>

                    <p className='mt-5 text-md'>
                        We're working hard to get Talkpod<br />
                        ready for everyone! While we wrap up <br />
                        the finshed touches, we're adding<br />
                        people gradually to make sure <br />
                        nothing breaks 🧪
                    </p>

                </div>


                <div className='mt-5'>

                    <Link to="/register"
                        className='bg-white px-4 py-2 text-violet-900 text-xs sm:text-sm font-bold rounded-full'>
                        Create an account
                    </Link>

                    <div className='my-4 text-xs sm:text-md'>
                        Already have an account ?&nbsp;

                        <Link to="/login" className='text-white font-semibold hover:underline duration-500'>
                            Sign in
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}
