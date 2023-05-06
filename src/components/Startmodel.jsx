import earth from "../assets/earth.png"
import group from "../assets/group.png"
import lock from "../assets/lock.png"

import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from "../../app/modalSlice"
import axios from "axios"
const backend = import.meta.env.VITE_APP_BACKEND;








export const Startmodel = () => {



    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { _id } = useSelector((state)=>state.auth.user)

    const [roomType, setRoomtype] = useState('public');
    const [roomTopic, setRoomtopic] = useState("");


    const createRoom = async (e) => {
        if (!roomTopic) return;

        e.preventDefault();

        const res = await axios.post(backend + "/room/createroom", { _id, roomTopic, roomType });
        res && navigate(`/room/${res.data._id}`);
    }







    return (
        <>
            {/* blur card */}
            <div className="z-10 backdrop-blur-sm fixed inset-0 bg-opacity-50 overflow-y-auto h-full w-full">


                {/* modal card */}
                <div className='z-50 relative  mt-20 w-full sm:w-[25rem] p-6 sm:p-8 text-white mx-auto bg-gradient-to-r from-fuchsia-500 via-violet-600 to-rose-500 rounded-lg hover:shadow-2xl hover:shadow-fuchsia-500  duration-1000' >

                    <div className='flex justify-between'>
                        <p className='font-semibold text-md sm:text-lg'>Enter the Podcast name</p>

                        <button onClick={() => dispatch(toggleModal(false))}>
                            Close
                        </button>
                    </div>

                    <input
                        className='my-3 block w-full p-2 rounded-lg outline-none text-gray-600 font-semibold placeholder:text-sm'
                        placeholder='Why podcasts are trending ?'
                        type="text"
                        onChange={(e) => setRoomtopic(e.target.value)}
                    />


                    <hr className="my-3" />


                    <p className='my-3 font-semibold text-sm sm:text-md'>
                        Select room type
                    </p>


                    <div className='flex justify-evenly text-center text-sm font-semibold'>
                        <div>
                            <img src={earth}
                                className={`${roomType === 'public' && "bg-white"} mx-auto p-4 rounded-lg duration-500`}
                                alt=""
                                onClick={() => { setRoomtype('public') }} />
                            <p>Public</p>
                        </div>
                        <div>
                            <img src={lock}
                                className={`${roomType === 'locked' && "bg-white"} mx-auto p-4 rounded-lg duration-500`}
                                alt=""
                                onClick={() => { setRoomtype('locked') }} />
                            <p>Locked</p>
                        </div>
                        <div>
                            <img src={group}
                                className={`${roomType === 'group' && "bg-white"} mx-auto p-4 rounded-lg duration-500`}
                                alt=""
                                onClick={() => { setRoomtype('group') }} />
                            <p>Group</p>
                        </div>

                    </div>



                    <hr className="my-3" />


                    <p className='my-5 text-sm'>
                        You are starting a room, {roomType} to everyone
                    </p>


                    <button
                        className='bg-white px-4 py-2 text-violet-600 text-sm font-semibold rounded-full'
                        onClick={createRoom}>
                        Start
                    </button>



                </div>
            </div >

        </>
    )
}
