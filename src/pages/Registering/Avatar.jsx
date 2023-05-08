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

const backend = import.meta.env.VITE_APP_BACKEND;





// ------------------------------------


export const Avatar = ({ onNext }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activation)
  const [pic, setPic] = useState();
  const [url, setUrl] = useState("");


  // const uploadPic = (e) => {
  //   e.preventDefault();
  //   setPic(e.target.files[0]);
  //   dispatch(setAvatar(url))
  // }
  
  
  const go = (data) => {
    dispatch(setAuth(data));
    navigate("/rooms");
    console.log(data);
  }
  
  const handleAvatar = async (e) => {
    e.preventDefault();
    if (!pic) return;

    try {
      const imageName = pic.name + String(Date.now()); 
      const imageRef = ref(storage, `images/${imageName}`);

      await uploadBytes(imageRef, pic);
      const imgurl = await getDownloadURL(imageRef);

      const res = await axios.post(`${backend}/auth/activate`, { name, pic : imgurl },
      { withCredentials: true });

      res && go(res.data);
    }
    catch(e) { console.log(e.message) }

  }


  return (
    <div>
      <Navbar/>


      <div className='my-36 h-72 w-full sm:w-[32rem] px-3 sm:px-20 py-8 text-white mx-auto text-center bg-gradient-to-r from-fuchsia-500 via-violet-600 to-rose-500 rounded-lg hover:shadow-2xl hover:shadow-fuchsia-500  duration-1000'>

        <p className='font-semibold'>😎 Upload your picture <br/>{name} </p>


        <div className='mt-1'>

          <label htmlFor='pic'
            className={`text-xs rounded-lg mx-auto my-2 cursor-pointer`}>

            <img
              src={pic ? URL.createObjectURL(pic) : nopicture}
              className="mx-auto h-28 sm:h-32 my-2 rounded-xl cursor-pointer border-white object-cover" alt="" />

          </label>


          <input
            onChange={(e) => setPic(e.target.files[0])}
            id='pic'
            className='hidden my-5 w-72 p-2 text-center rounded-lg text-gray-600 font-semibold'
            type="file" accept="image/*" />

          <button 
            onClick={handleAvatar} 
            className='bg-white px-3 py-2 my-2 text-violet-600 text-xs sm:text-sm font-semibold rounded-full'>
          Next
          </button>


        </div>
      </div>



    </div>
  )
}
