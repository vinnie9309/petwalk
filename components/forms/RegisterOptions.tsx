'use client';
import { useState } from "react";

const RegisterOpitons = (props: any) => {
    const [ sitterOption, setSitterOption ] = useState('');
    const [ clickedSitter, setClickedSitter ] = useState(false);
    const [ clickedOwner, setClickedOwner ] = useState(false);
    const [ disabledNext, setDisabledNext ] = useState(false);
    
    const sitterHandler = () => {
        setSitterOption('sitter');
        setClickedSitter( true );
        setClickedOwner( false );
        setDisabledNext(false);
    }
    
    const ownerHandler = () => {
        setSitterOption('LFsitter');
        setClickedOwner( true );
        setClickedSitter( false );
        setDisabledNext(false);
    } 
    
    const handleSubmit = ( event: any ) => {
        event.preventDefault();
        props.nextFormStep();
        props.handleData({
            sitterOption
        });
    }

    const handleNext = () => {
        setDisabledNext(true);
    }

    return (
        <form className="flex flex-col justify-evenly" onSubmit={handleSubmit}>
            <div>
                <input onClick={sitterHandler} type="radio" className="invisible" id="sitter" name="sitter" />
                <label className={`block w-full py-2 pl-5 cursor-pointer border-2 border-black rounded ${ clickedSitter ? 'border-red-500' : '' } `} htmlFor="sitter">I am looking for pet sitter jobs</label>
            </div>

            <div>
                <input onClick={ownerHandler} type="radio" className="invisible" id="LFsitter" name="sitter" />
                <label className={`block w-full py-2 pl-5 cursor-pointer border-2 border-black rounded mb-8 ${ clickedOwner ? 'border-red-500' : '' } `} htmlFor="LFsitter">I am looking for pet sitters</label>
            </div>
            <div className="flex w-full">
                <button disabled={disabledNext} onClick={handleNext} className="bg-red-400 p-4 w-full text-white mt-4 rounded">Next</button>
            </div>
        </form>
    )   
}

export default RegisterOpitons;
