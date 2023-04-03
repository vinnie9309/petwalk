'use client';
import { useState } from "react";
import './form-container.css';
import Image from "next/image";
import logo from '../../public/assets/images/logo.png';
import { useDispatch } from "react-redux";
import { storeActions } from "../../app/store/store";
import PersonalInfo from "../forms/PersonalInfo";
import ContactInfo from "../forms/ContactInfo";
import RegisterOpitons from "../forms/RegisterOptions";
import ServicesSelect from "../forms/ServicesSelect";
import DailyRate from "../forms/DailyRate";
import UploadProfileImg from "../forms/UploadProfileImg";
import Description from "../forms/Description";
import SelectHood from "../forms/SelectHood";

const FormContiner = () => {
    const [ formStep, setFormStep ] = useState(0);
    const dispatch = useDispatch();
    const nextFormStep = () => setFormStep( (currentStep) => currentStep + 1 );

    const handlePersonalData = (value: any) => {
        console.log(value);
        dispatch(storeActions.storeData());
    }

    const handleRouting = (value: string) => {
        console.log(value);
    }

    return (
        <div className="px-10 py-10 shadow-xl w-100">
            <div className="flex justify-center">
                <Image src={logo} height="160" width="120" alt="site logo" />
            </div>
            {/* TODO: Create global reusable components */}
            { formStep === 0 && <RegisterOpitons clickedStep={handleRouting} handleData={handlePersonalData} nextFormStep={nextFormStep} />  }
            { formStep === 1 && <PersonalInfo handleData={handlePersonalData} nextFormStep={nextFormStep} />  }
            { formStep === 2 && <ContactInfo handleData={handlePersonalData} nextFormStep={nextFormStep} /> }
            { formStep === 3 && <ServicesSelect handleData={handlePersonalData} nextFormStep={nextFormStep} /> }
            { formStep === 4 && <DailyRate handleData={handlePersonalData} nextFormStep={nextFormStep} /> }
            { formStep === 5 && <UploadProfileImg handleData={handlePersonalData} nextFormStep={nextFormStep} /> }
            { formStep === 6 && <Description handleData={handlePersonalData} nextFormStep={nextFormStep} /> }
            { formStep === 7 && <SelectHood handleData={handlePersonalData} nextFormStep={nextFormStep} /> }
        </div>
    )
}

export default FormContiner;
