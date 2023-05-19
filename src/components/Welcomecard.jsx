import React from 'react'
import { Navbar } from "./Navbar"
import { Link } from 'react-router-dom'
import left from "../assets/left.png"
import right from "../assets/right.png"
import "../pages/Registering/style.css"


export const Welcomecard = () => {
    return (
        <div id="go" className='sm:border'>
            {/* <Navbar /> */}

           


            <p className='mt-20 h-fit text-purple-400 font-extrabold text-7xl
                text-center'>
                Talkpod
            </p>

            <p className='-mt-[4.3rem] -ml-2 h-fit text-violet-950 font-extrabold text-7xl
                text-center'>
                Talkpod
            </p>






            <div className='my-5 shrink-0 h-80 w-full sm:w-[32rem] px-2 sm:px-20 py-8  
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












        </div>
    )
}
