import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from '../../app/authSlice';
const backend = import.meta.env.VITE_APP_BACKEND;

export function useRefresh(){

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      
      const req = async () => {
        try{
            const { data } = await axios.get(backend + "/auth/refresh", {withCredentials:true});
            data && dispatch(setAuth(data.user));
            data && setLoading(false)
        }
        catch(exc){
            console.log(exc.message);
            setLoading(false);
        }
      }
      req();

    }, []);


    




    return {loading};
}





