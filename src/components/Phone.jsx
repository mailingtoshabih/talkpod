import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";


import { useDispatch } from "react-redux";
import { setOtp } from '../../app/authSlice';

const backend = import.meta.env.VITE_APP_BACKEND;





export const Phone = ({ onNext }) => {
    
    const dispatch = useDispatch();
    const [phone, setPhone] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (phone){

            try {
                const { data } = await axios.post(`${backend}/auth/sendotp`, { phone })
                data && dispatch(setOtp({
                    phone: data.phone,
                    hash: data.hash
                }))
                console.log(data.otp)
            }
            catch (exc) {
                console.log(exc.message)
            }
            onNext(e);
        }

    }












    return (
        <div>

            <div className='my-36 h-72 w-full sm:w-[32rem] px-2 sm:px-20 py-8 text-white mx-auto text-center bg-gradient-to-r from-fuchsia-500 via-violet-600 to-rose-500 rounded-lg hover:shadow-2xl hover:shadow-fuchsia-500  duration-1000'>

                <p className='font-semibold text-lg sm:text-xl'>Create an account</p>
                <p className='mt-3 font-semibold text-xs sm:text-sm'>Enter your phone number</p>


                {/* >>>> children task - add phone validation */}
                <div className='mt-3 sm:mt-5'>
                    <input
                        className='my-3 mx-auto block sm:w-64 p-2 text-center rounded-lg outline-none text-gray-600 font-semibold'
                        placeholder='9123456789'
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                    />


                    <button onClick={handleSubmit} className='bg-white px-4 py-2 text-violet-600 text-sm font-semibold rounded-full'>
                        Next
                    </button>

                    <p className='my-5 text-xs'>
                        By entering your number, you're agreeing to our<br />Terms of service and Privacy Policy
                    </p>

                </div>
            </div>
        </div>
    )
}
