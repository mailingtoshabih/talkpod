import React from 'react'
import { Navbar } from "./Navbar"
import { Link } from 'react-router-dom'



export const Welcomecard = () => {
    return (
        <div>
            <Navbar />
            
            <div className='my-36 h-72 w-full sm:w-[32rem] px-2 sm:px-20 py-8  text-white mx-auto text-center bg-gradient-to-r from-fuchsia-500 via-violet-600 to-rose-500 rounded-lg hover:shadow-2xl hover:shadow-fuchsia-500 duration-1000'>


                <div>

                    <p className='font-semibold text-lg sm:text-xl'>😌 Welcome to Talkpod</p>

                    <p className='mt-2 sm:mt-5 text-xs sm:text-sm'>
                        We're working hard to get Talkpod<br />
                        ready for everyone! While we wrap up <br />
                        the finshed touches, we're adding<br />
                        people gradually to make sure <br />
                        nothing breaks 🧪
                    </p>

                </div>


                <div className='mt-2 sm:mt-5'>

                    <Link to="/register"
                        className='bg-white px-4 py-2 text-violet-600 text-xs sm:text-sm font-semibold rounded-full'>
                        Create an account
                    </Link>

                    <div className='my-2 sm:my-4 text-xs sm:text-md'>
                        Already have an account ?&nbsp;

                        <Link to="/login" className='text-white font-semibold hover:underline duration-500'>
                            Sign in
                        </Link>

                    </div>


                </div>





            </div>


        </div>
    )
}
