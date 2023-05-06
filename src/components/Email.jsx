import {useState} from 'react'
import { Link } from 'react-router-dom'



export const Email = () => {

    const [ email, setEmail ] = useState("");

    

    return (
        <>
            <div>

                <div className='mt-20 h-60 text-white  px-20 py-10 mx-auto w-fit text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-2xl hover:shadow-cyan-500 duration-1000'>

                    <p className='font-semibold'>Enter your Email ☎️</p>


                    <div className='mt-5'>

                        <input
                            className='my-5 block w-72 p-2 text-center rounded-lg outline-none text-gray-600 font-semibold'
                            type="email"
                            onChange={(e)=>setEmail(e.target.value)}
                        />

                        <Link to="/register" className='bg-white px-4 py-2 text-violet-600 text-sm font-semibold rounded-full'>
                        Next
                        </Link>

                        <p className='my-5 text-xs'>
                            By entering your email, you're agreeing to our<br />Terms of service and Privacy Policy
                        </p>


                    </div>
                </div>

            </div>
        </>
    )
}
