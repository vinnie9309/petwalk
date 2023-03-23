'use client';
import { useState } from 'react'

const RegisterOpitons = (props: any) => {
    const [ checked, setChecked ] = useState(false);

    const handleSubmit = ( event: any ) => {
        event.preventDefault();
        props.nextFormStep();
    }

    const handleSitterData = (event: any) => {
        setChecked( (prevChecked) => !prevChecked );
        console.log(checked);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={handleSitterData} type="radio" checked={checked} className="border rounded mx-5" id="sitter" name="sitter" />
                <label className="w-6" htmlFor="sitter">I am looking for pet sitter jobs</label>
            </div>

            <div>
                <input onChange={handleSitterData} type="radio" checked={checked} className="border rounded mx-5" id="LFsitter" name="sitter" />
                <label className="w-6" htmlFor="LFsitter">I am looking for pet sitters</label>
            </div>
            <div className="flex w-full px-5">
                <button type="submit" className="bg-red-400 p-4 w-full text-white mt-4 rounded">Next</button>
            </div>
        </form>
    )   
}

export default RegisterOpitons;
