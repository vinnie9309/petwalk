'use client';
import { useState } from "react";

const ContactInfo = (props: any) => {
    const [ mailVal, setMailVal ] = useState('')
    const [ phoneVal, setPhoneVal ] = useState('');
    const [ nextDisabled, setNextDisabled ] = useState(true);

    const handleMailVal = (event: any) => {
        setMailVal(event.target.value);
        setNextDisabled(event.target.value === 0);
    }

    const handlePhoneVal = (event: any) => {
        setPhoneVal(event.target.value);
        setNextDisabled(event.target.value === 0);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.nextFormStep();
        props.handleData({
            mailVal,
            phoneVal
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-2xl text-center mb-5">Как бихте желали да се свържат с вас?</h1>
            <div className="flex flex-col mb-5">
                <label htmlFor="email">Имейл</label>
                <input onChange={handleMailVal} className="border rounded py-2 pl-3" id="email" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="phone">Телефонен номер</label>
                <input onChange={handlePhoneVal} className="border rounded py-2 pl-3" id="phone" />
            </div>
            <div className="flex w-full">
                <button disabled={ nextDisabled } className={`bg-red-400 p-4 w-full text-white mt-4 rounded ${nextDisabled ? 'disabled' : ''}`}>Напред</button>
            </div>
        </form>
    )
}

export default ContactInfo;
