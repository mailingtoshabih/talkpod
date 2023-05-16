import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleModal } from "../../app/modalSlice"






export const Header = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState("");

    
    return (
        <div className=' p-2 mb-5 bg-gradient-to-r from-green-100 to-rose-100 rounded-xl'>
            <div className='p-1 space-x-5 flex justify-between'>

                <div className='text-sm sm:text-md w-full sm:w-2/3 flex'>
                    <input
                        className='my-3 mx-auto block w-full p-1 text-center rounded-l-full outline-none border-2 sm:border-4 border-violet-900 text-violet`-950 font-semibold placeholder:text-gray-300 hover:shadow-purple-200 hover:shadow-2xl duration-700'
                        placeholder='eg.Aritificial Intelligence'
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button
                        className='my-3 mx-auto block w-20 p-1 text-center rounded-r-full text-gray-600 font-semibold border-2 border-white sm:border-4 hover:border-violet-900 hover:bg-violet-950 hover:text-white hover:shadow-purple-500 hover:shadow-2xl duration-700'>
                        Search
                    </button>
                </div>

                <div className='hidden sm:flex space-x-3'>
        
                    <button onClick={() => dispatch(toggleModal(true))}
                        className='hidden md:flex w-fit h-12  my-3 mx-auto p-2 px-3 text-center rounded-full text-white font-semibold border-4 border-white  bg-gradient-to-r from-violet-950 to-purple-950 hover:border-violet-700 hover:bg-violet-500 hover:text-white hover:shadow-2xl hover:shadow-violet-500 duration-700'>
                        <p className='hidden md:flex'>Start a podcast</p>
                        <p className="flex md:hidden">Podcast</p>
                    </button>
                </div>


            </div>




            <div className='p-1 flex justify-between'>

                <p className={`hidden mt-10 sm:block text-gray-500 my-auto font-semibold text-xl sm:text-2xl md:text-3xl`}>
                    Public Podcasts
                </p>

                <p className={`block mt-10 sm:hidden text-gray-500 my-auto font-semibold text-xl`}>
                    Podcasts
                </p>

                <div className='mt-5'>
                    <button
                        onClick={() => dispatch(toggleModal(true))}
                        className='block text-xs  md:hidden w-fit h-10 my-3 mx-auto p-1 px-3 text-center rounded-full text-white font-semibold border-4  bg-gradient-to-r from-violet-700 to-purple-700 hover:border-violet-700  hover:text-white hover:shadow-2xl hover:shadow-violet-500 duration-700'>
                        Start a podcast
                    </button>


                </div>

            </div>

        </div>
    )
}
