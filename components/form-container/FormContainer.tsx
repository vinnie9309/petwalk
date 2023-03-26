'use client';
import { useState } from "react";
import PersonalInfo from "../forms/PersonalInfo";
import ContactInfo from "../forms/ContactInfo";
import './form-container.css';
import Image from "next/image";
import logo from '../../public/assets/images/logo.png';
import RegisterOpitons from "../forms/RegisterOptions";
import { useDispatch } from "react-redux";
import { storeActions } from "../../app/store/store";

const FormContiner = () => {
    const [ formStep, setFormStep ] = useState(0);
    const dispatch = useDispatch();
    const nextFormStep = () => setFormStep( (currentStep) => currentStep + 1 );

    const handlePersonalData = (value: any) => {
        console.log(value);
        dispatch(storeActions.storeData());
    }

    return (
        <div className="px-10 py-10 shadow-xl w-100">
            <div className="flex justify-center">
                <Image src={logo} height="160" width="120" alt="site logo" />
            </div>
            { formStep === 0 && <RegisterOpitons handleData={handlePersonalData} nextFormStep={nextFormStep} />  }
            { formStep === 1 && <PersonalInfo handleData={handlePersonalData} nextFormStep={nextFormStep} />  }
            { formStep === 2 && <ContactInfo nextFormStep={nextFormStep} /> }
        </div>
    )
}

export default FormContiner;
