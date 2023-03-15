'use client';
import { useState } from "react";
import PersonalInfo from "../forms/PersonalInfo";
import ContactInfo from "../forms/ContactInfo";

const FormContiner = () => {
    const [ formStep, setFormStep ] = useState(0);
    const [ dogWalker, setDogWalker ] = useState(false);
    const nextFormStep = () => setFormStep( (currentStep) => currentStep + 1 );
    console.log(formStep);

    return (
        <div>
            <h1>Form Wrapper</h1>
            <p>Show/hide the different for ms here based on the step </p>
            { formStep === 0 && <PersonalInfo nextFormStep={nextFormStep} />  }
            { formStep === 1 && <ContactInfo nextFormStep={nextFormStep} /> }
        </div>
    )
}

export default FormContiner;
