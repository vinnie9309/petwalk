'use client';
import { useState } from "react";

const ContactInfo = (props: any) => {
    const [ mailVal, setMailVal ] = useState('')
    const [ phoneVal, setPhoneVal ] = useState('');

    const handleMailVal = (event: any) => {
        setMailVal(event.target.value);
    }

    const handlePhoneVal = (event: any) => {
        setPhoneVal(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.nextFormStep();
        props.handleData({
            mailVal,
            phoneVal
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>How can you be contacted?</h1>
            <div>
                <label htmlFor="email">Email Adress</label>
                <input onChange={handleMailVal} id="email" />
            </div>

            <div>
                <label htmlFor="phone">Phone Number</label>
                <input onChange={handlePhoneVal} id="phone" />
            </div>
            <div>
                <button>Next</button>
            </div>
        </form>
    )
}

export default ContactInfo;
