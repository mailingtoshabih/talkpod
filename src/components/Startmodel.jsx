
import nopicture from "../assets/image.png"

import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from "../../app/modalSlice"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "../firebase"
import axios from "axios"
const backend = import.meta.env.VITE_APP_BACKEND;








export const Startmodel = () => {



    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { _id } = useSelector((state) => state.auth.user)

    const [roomType, setRoomtype] = useState('public');
    const [roomTopic, setRoomtopic] = useState("");
    const [pic, setPic] = useState();
    const [roomDesc, setDesc] = useState("");
    const [spinner, setSpinner] = useState(false);

    const createRoom = async (e) => {
        e.preventDefault();

        if (!roomTopic || !pic) return;

        try {
            setSpinner(true);

            const imageName = pic.name + String(Date.now());
            const imageRef = ref(storage, `roomimage/${imageName}`);

            await uploadBytes(imageRef, pic);
            const imgurl = await getDownloadURL(imageRef);

            const res = await axios.post(backend + "/room/createroom",
                { _id, roomTopic, roomType, roomDesc, pic: imgurl });

            res && setSpinner(false);
            res && dispatch(toggleModal(false));
            res && navigate(`/room/${res.data._id}`);
            // res && console.log(res.data)
        }
        catch (e) {
            console.log(e.message)
            setSpinner(false);
        }


        // const res = await axios.post(backend + "/room/createroom", { _id, roomTopic, roomType });
        // res && navigate(`/room/${res.data._id}`);
    }






    return (
        <>
            {/* blur card */}
            <div className="z-10 backdrop-blur-sm fixed inset-0 bg-opacity-50 overflow-y-auto h-full w-full">


                {/* modal card */}
                <div className='z-50 relative mt-10 sm:mt-5  w-full sm:w-[25rem] p-6 sm:p-8 text-white mx-auto bg-gradient-to-r from-violet-950  to-purple-600 rounded-lg hover:shadow-2xl hover:shadow-violet-700  duration-1000' >

                    <div className='flex justify-between'>
                        <p className='font-semibold text-md sm:text-lg'>Enter Your Podcast Topic</p>

                        <button onClick={() => dispatch(toggleModal(false))}
                            className="bg-red-500 hover:bg-red-600 px-2 rounded">
                            Close
                        </button>
                    </div>

                    <input
                        className='my-3 block w-full p-2 rounded-lg outline-none text-gray-600 font-semibold placeholder:text-sm'
                        placeholder='*Why podcasts are trending ?'
                        type="text"
                        onChange={(e) => setRoomtopic(e.target.value)}
                    />
                    <textarea
                        className='my-3 block w-full p-2 rounded-lg outline-none text-gray-600 font-semibold placeholder:text-sm'
                        placeholder='Description of this Room'
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                    />


                    {/* picture */}
                    <>

                        <p className='font-semibold text-sm sm:text-md'>
                            Select Topic Picture
                        </p>

                        <label htmlFor='pic'
                            className={`text-xs cursor-pointer`}>

                            <div className="py-2">
                                <img
                                    src={pic ? URL.createObjectURL(pic) : nopicture}
                                    className=" h-32 sm:h-36 rounded-xl cursor-pointer border-white object-cover" alt="" />
                            </div>
                        </label>


                        <input
                            onChange={(e) => setPic(e.target.files[0])}
                            id='pic'
                            className='hidden mt-4 w-72 p-2 text-center rounded-lg text-gray-600 font-semibold'
                            type="file" accept="image/*" />

                    </>







                    <hr className="my-1" />


                    <p className='my-3 font-semibold text-sm sm:text-md'>
                        Select room type
                    </p>


                    <div className='flex space-x-2 justify-start text-center text-sm font-semibold'>
                        <p className={`${roomType === 'public' && "bg-white text-indigo-700"} p-2 rounded-lg duration-150 cursor-pointer`} onClick={() => { setRoomtype('public') }}>Public</p>
                        <p className={`${roomType === 'locked' && "bg-orange-400 text-gray-800"}  p-2 rounded-lg  cursor-pointer duration-500`} onClick={() => { setRoomtype('locked') }}>Locked</p>
                        <p className={`${roomType === 'group' && "bg-rose-500 text-white"} p-2 px-4  cursor-pointer rounded-lg duration-500`} onClick={() => { setRoomtype('group') }}>Private</p>
                    </div>



                    <hr className="my-2" />


                    <p className='my-2 text-sm'>
                        You are starting a room, {roomType} to everyone
                    </p>


                    <button
                        className='bg-white px-4 py-2 text-violet-600 text-sm font-semibold rounded-full'
                        onClick={createRoom}>
                        {!spinner ? "Create Room" :
                            (
                                <div className='text-center'>
                                    <svg aria-hidden="true" className="inline w-4 h-4 text-white animate-spin fill-violet-900" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                </div>
                            )
                        }
                    </button>



                </div>
            </div >

        </>
    )
}
