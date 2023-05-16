import { Navbar } from "../../components/Navbar"
import nopicture from '../../assets/nopicture.png';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAvatar } from "../../../app/activationSlice"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { setAuth } from "../../../app/authSlice";

import { storage } from "../../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

import { auth } from "../../firebase"
import { onAuthStateChanged } from "firebase/auth"

const backend = import.meta.env.VITE_APP_BACKEND;





// ------------------------------------


export const Avatar = ({ onNext }) => {

  const { name } = useSelector((state) => state.activation)
  const { email } = useSelector((state) => state.auth?.user)

  const dispatch = useDispatch();
  const [pic, setPic] = useState();


  const [url, setUrl] = useState("");
  const navigate = useNavigate();



  const go = (data) => {
    dispatch(setAuth(data.user));
    navigate("/rooms");
  }


  let res;

  const handleAvatar = async (e) => {
    e.preventDefault();
    if (!pic) return;

    try {

      const imageName = pic.name + String(Date.now());
      const imageRef = ref(storage, `images/${imageName}`);

      await uploadBytes(imageRef, pic);
      const imgurl = await getDownloadURL(imageRef);

      res = await axios.post(`${backend}/auth/activate`,
        { email, name, pic: imgurl },
        { withCredentials: true });

      res && go(res.data);
    }
    catch (e) { console.log(e.message) }
  }









  return (
    <div className='h-screen border bg-hero bg-no-repeat bg-cover bg-center bg-fixed'>
      {/* <Navbar /> */}

      <p className='mt-20 h-fit text-violet-950 font-extrabold text-7xl
                text-center'>
        Talkpod
      </p>





      <div className='my-5 h-80 w-full sm:w-[32rem] px-2 sm:px-20 py-8 text-white mx-auto text-center 
      bg-gradient-to-r from-violet-950 to-purple-600 sm:rounded-lg 
      hover:shadow-2xl hover:shadow-violet-900  duration-1000'>

        <p className='font-semibold text-xl sm:text-2xl'>
          😎 Upload your picture <br />{name}
        </p>


        <div className='mt-1'>

          <label htmlFor='pic'
            className={`text-xs rounded-lg mx-auto cursor-pointer`}>

            <img
              src={pic ? URL.createObjectURL(pic) : nopicture}
              className="mx-auto h-28 sm:h-32 my-4 rounded-xl cursor-pointer border-white object-cover" alt="" />

          </label>


          <input
            onChange={(e) => setPic(e.target.files[0])}
            id='pic'
            className='hidden mt-4 w-72 p-2 text-center rounded-lg text-gray-600 font-semibold'
            type="file" accept="image/*" />

          <button
            onClick={handleAvatar}
            className='bg-white px-3 py-2 my-1 text-violet-600 text-xs sm:text-sm font-semibold rounded-full'>
            Next
          </button>


        </div>
      </div>



    </div>
  )
}
