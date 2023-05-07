import { Navbar } from "../../components/Navbar"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useSelector } from 'react-redux';
import axios from 'axios';

import { useDispatch } from "react-redux";
import { setAuth } from "../../../app/authSlice";

const backend = import.meta.env.VITE_APP_BACKEND;
















export const Otp = () => {

  const navigate = useNavigate();
  const { phone, hash } = useSelector((state) => state.auth);

  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();




  const handleOtp = async (e) => {
    e.preventDefault();

    try {
      if (otp) {
        const { data } = await axios.post(`${backend}/auth/verifyotp`,
          {
            Otp: otp,
            Hash: hash,
            Phone: phone
          },
          { withCredentials: true })
          .then(() => {
            dispatch(setAuth(data.newuser));
            navigate("/rooms");
          })

      }
    }
    catch (exc) {
      console.log(exc.message);
    }
  }










  return (
    <div>

      <div className='my-36 h-72 w-full sm:w-[32rem] px-2 sm:px-20 py-8 text-white mx-auto text-center  bg-gradient-to-r from-fuchsia-500 via-violet-600 to-rose-500 rounded-lg hover:shadow-2xl hover:shadow-fuchsia-500  duration-1000'>

        <p className='font-semibold'>Enter the code we just sent you ☎️</p>

        {/* Set validation for otp*/}
        <div className='mt-5'>

          <input
            className='my-5 mx-auto block w-40 p-2 text-center rounded-lg outline-none text-gray-600 font-semibold'
            type="text"
            onChange={(e) => setOtp(e.target.value)}
          />

          <button onClick={handleOtp} className='bg-white px-3 py-2 text-violet-600 text-sm font-semibold rounded-full'>
            Next
          </button>

          <p className='my-5 text-xs'>
            By entering your OTP, you're agreeing to our<br />Terms of service and Privacy Policy
          </p>

        </div>
      </div>



    </div>
  )
}
