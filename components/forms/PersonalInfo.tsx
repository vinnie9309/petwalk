'use client';
import { useState } from "react";

const PersonalInfo = (props: any) => {
    const [ nameVal, setNameVal ] = useState('');
    const [ passVal, setPassVal ] = useState('');
    
    const handleNameVal = (event: any) => {
        setNameVal(event.target.value);
    }
    
    const handlePassVal = ( event: any ) => {
        setPassVal(event.target.value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.nextFormStep();
        props.handleData({
            nameVal,
            passVal
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label className="w-6" htmlFor="name">Name</label>
                <input onChange={handleNameVal} className="border rounded py-2 pl-3" id="name" />
            </div>

            <div className="flex flex-col">
                <label className="w-6" htmlFor="password">Password</label>
                <input onChange={handlePassVal} type="password" className="border rounded py-2" id="password" />
            </div>
            <div className="flex w-full px-5">
                <button type="submit" className="bg-red-400 p-4 w-full text-white mt-4 rounded">Next</button>
            </div>
        </form>
    )
}

export default PersonalInfo;
