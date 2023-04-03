'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeActions } from '../../store/store';
import '../register.css';
import Image from 'next/image';
import logo from '../../../public/assets/images/logo.png';
import PersonalInfo from "../../../components/forms/PersonalInfo";
import ContactInfo from "../../../components/forms/ContactInfo";
import ServicesSelect from '../../../components/forms/ServicesSelect';
import DailyRate from '../../../components/forms/DailyRate';
import UploadProfileImg from '../../../components/forms/UploadProfileImg';
import Description from '../../../components/forms/Description';
import SelectHood from '../../../components/forms/SelectHood';
import RegisterOpitons from '../../../components/forms/RegisterOptions';

const RegisterSteps = () => {
    const dispatch = useDispatch();
    const [ formStep, setFormStep ] = useState(0);
    const nextFormStep = () => setFormStep( () => {
        return formStep + 1;
    } );

    const handlePersonalData = (value: any) => {
        console.log(value);
        dispatch(storeActions.storeData(value));
    }

    return (
        <div className='registration-wrapper flex flex-col items-center justify-center'>
            <div className="flex flex-col m-auto px-10 py-10 shadow-xl w-100">
                <span>{formStep}</span>
                <div className="flex justify-center">
                    <Image src={logo} height="160" width="120" alt="site logo" />
                </div>
                {/* TODO: Change this into dynamic paths instead of formSteps */}
                { formStep === 0 && <RegisterOpitons nextFormStep={nextFormStep} handleData={handlePersonalData} /> }
                { formStep === 1 && <PersonalInfo nextFormStep={nextFormStep} handleData={handlePersonalData} />  }
                { formStep === 2 && <ContactInfo nextFormStep={nextFormStep} handleData={handlePersonalData} /> }
                { formStep === 3 && <ServicesSelect nextFormStep={nextFormStep} handleData={handlePersonalData} /> }
                { formStep === 4 && <DailyRate nextFormStep={nextFormStep} handleData={handlePersonalData} /> }
                { formStep === 5 && <UploadProfileImg nextFormStep={nextFormStep} handleData={handlePersonalData} /> }
                { formStep === 6 && <Description nextFormStep={nextFormStep} handleData={handlePersonalData} /> }
                { formStep === 7 && <SelectHood nextFormStep={nextFormStep} handleData={handlePersonalData} /> } 
            </div>
        </div>
    )
}

export default RegisterSteps;
