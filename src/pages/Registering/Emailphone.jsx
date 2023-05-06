import {useState} from 'react'
import { Phone } from '../../components/Phone';
import { Email } from '../../components/Email';
import { Otp } from './Otp';


const types = {
  'phone' : Phone,
  'email' : Email,
  'otp' : Otp
}

export const Emailphone = ({onNext}) => {


  const [type, setType] = useState('phone');
  const Component = types[type];

  

  return (

    <div>

      {/* <button onClick={()=>setType('phone')}>Phone</button>
      <button onClick={()=>setType('email')}>Email</button>
      <button onClick={()=>setType('otp')}>otp</button> */}

      

      <Component onNext = {onNext}/>


    </div>
  )
}
