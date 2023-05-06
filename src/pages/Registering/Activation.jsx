import { Name } from "./Name"
import { Avatar } from "./Avatar"
import { useState } from "react"


const steps = {
    1: Name,
    2: Avatar
}


export const Activation = () => {

    const [step, setStep] = useState(1);
    const Step = steps[step];

    const onNext = (e) => {
        e.preventDefault();

        setStep(step+1);
    }


    return (
        <div>


            <Step onNext = {onNext}/>



        </div>
    )
}
