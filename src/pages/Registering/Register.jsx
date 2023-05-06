import { Navbar } from '../../components/Navbar'
import { Emailphone } from './Emailphone'
import { Otp } from './Otp'
import { Name } from './Name'
import { Avatar } from './Avatar'

import { useState } from 'react'
import { Link } from 'react-router-dom'





const steps = {
    1: Emailphone,
    2: Otp
}


export const Register = () => {

    const [step, setStep] = useState(1);
    const Step = steps[step];


    const onNext = (e) => {
        e.preventDefault();
        setStep(step + 1);
    }

    return (
        <div className='font-poppins'>

            <Navbar />

            <div>

                <Step onNext={onNext} />

            </div>

        </div>
    )
}
