import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Header } from '../components/Header'
import { Roomcard } from '../components/Roomcard'
import { Startmodel } from '../components/Startmodel'
import { useSelector } from 'react-redux'
import axios from "axios"
import { Load } from "../components/Load"
import { Footer } from '../components/Footer'
const backend = import.meta.env.VITE_APP_BACKEND;






export const Allrooms = () => {

  const toggle = useSelector((state) => state.toggle.toggle);

  const [rooms, setRooms] = useState("");





  useEffect(() => {
    const searchRooms = async () => {
      const res = await axios.get(backend + "/room/getrooms");
      res && setRooms(res.data.reverse());
    }
    searchRooms();
  }, [])



  return (
    <>
      <Navbar />

      <div className='mt-20 p-2 sm:px-10 h-96 max-w-7xl mx-auto'>

        <Header />

        {rooms ?
          (
            <div className='p-2 mb-10 w-full
          grid gap-5 grid-cols-2  
          lg:grid-cols-3 xl:grid-cols-4 shrink-0'>

              {

                rooms.map((r) => {
                  return <Roomcard data={r} key={r._id} />
                })

              }

            </div>
          ) :
          <Load />}


        {/* <Footer /> */}
        {toggle && <Startmodel />}

      </div>


    </>
  )
}
