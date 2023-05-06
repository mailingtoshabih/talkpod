import { Navbar } from "../../components/Navbar"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../app/activationSlice';







export const Name = ({ onNext }) => {

  const { name } = useSelector((state) => state.activation);
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState(name);


  
  const handleName = (e) => {
    e.preventDefault();
    if (!fullname) return;

    dispatch(setName(fullname));
    onNext(e);
  }




  return (
    <div>
      <Navbar/>

      <div className='my-36 h-72 w-full sm:w-[32rem] px-2 sm:px-20 py-8 mx-auto text-white text-center  bg-gradient-to-r from-fuchsia-500 via-violet-600 to-rose-500 rounded-lg hover:shadow-2xl hover:shadow-fuchsia-500  duration-1000'>

        <p className='font-semibold'>😀What is your Name ? </p>


        <div className='mt-5'>

          <input
            className='my-5 mx-auto block w-52 sm:w-72 p-2 text-center rounded-lg outline-none text-gray-600 font-semibold'
            type="text"
            spellCheck={false}
            onChange={(e) => setFullname(e.target.value)}
          />

          <button onClick={handleName} className='bg-white px-3 py-2 text-violet-600 text-sm font-semibold rounded-full'>
            Next
          </button>

          <p className='my-5 text-xs'>
            Please use your real names<br />Made up names will be blocked from talkpods
          </p>

        </div>
      </div>



    </div>
  )
}
