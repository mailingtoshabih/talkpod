import { Emailphone } from "./Registering/Emailphone";
import { Otp } from "./Registering/Otp";
import { Navbar } from "../components/Navbar"
import { useState } from "react";



const steps = {
  1: Emailphone,
  2: Otp
}


export const Login = () => {

  const [step, setStep] = useState(1)
  const Step = steps[step]

  const onNext = () => { 
    setStep(step + 1);
  }


  return (
    <div className="font-poppins">
      <Navbar/>
      <div>

        <Step onNext={onNext} />

      </div>
    </div>
  )
}
