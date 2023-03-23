'use client';
import { useState } from "react";
import PersonalInfo from "../forms/PersonalInfo";
import ContactInfo from "../forms/ContactInfo";
import './form-container.css';
import Image from "next/image";
import logo from '../../public/assets/images/logo.png';
import RegisterOpitons from "../forms/RegisterOptions";

const FormContiner = () => {
    const [ formStep, setFormStep ] = useState(0);
    const [ dogWalker, setDogWalker ] = useState(false);
    const nextFormStep = () => setFormStep( (currentStep) => currentStep + 1 );

    const handlePersonalData = (value: any) => {
        console.log(value);
    }

    return (
        <div className="px-10 py-5 mt-64 shadow-xl">
            <div className="flex justify-center">
                <Image src={logo} height="140" width="100" alt="site logo" />
            </div>
            <h1>Form Wrapper</h1>
            <p>Show/hide the different for ms here based on the step </p>
            { formStep === 0 && <RegisterOpitons handleData={handlePersonalData} nextFormStep={nextFormStep} />  }
            { formStep === 1 && <PersonalInfo handleData={handlePersonalData} nextFormStep={nextFormStep} />  }
            { formStep === 2 && <ContactInfo nextFormStep={nextFormStep} /> }
        </div>
    )
}

export default FormContiner;
