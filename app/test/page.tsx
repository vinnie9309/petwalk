'use client';
import man from '../../public/assets/images/man-1.png';
import man2 from '../../public/assets/images/man-2.png';
import woman from '../../public/assets/images/woman.png';
import Image from "next/image";
import { useState } from 'react';

const Test = () => {
    const [ nextDisabled, setNextDisabled ] = useState(true);

    const uploadToClient = (event: any) => {
        console.log(event.target.files);
    }

    const uploadToServer = (event: any) => {
        console.log(event);
    }

    return(
        <form>
            <h1 className="font-semibold text-2xl">Add your profile photo</h1>
            <p>Photos help people feel they are connecting with a real person. Add a photo to increase your chance of finding a match.</p>
            <div className='flex justify-evenly'>
                <Image src={man} height="120" width="80" alt="man smiling" />
                <Image src={man2} height="120" width="80" alt="man smiling" />
                <Image src={woman} height="120" width="80" alt="woman smiling" />
            </div>
            <div>
                <h3>Make a good first impression:</h3>
                <ul>
                    <li>Use a photo of your face</li>
                    <li>Center yourself and smile</li>
                    <li>Avoid photos with text</li>
                </ul>
            </div>
            <div className="flex w-full">
                {/* <button disabled={ nextDisabled } className={`bg-red-400 p-4 w-full text-white text-xl mt-4 rounded ${nextDisabled ? 'disabled' : ''}`}>Next</button> */}
                <input type="file" name="myImage" onChange={uploadToClient} />
                <button className="bg-red-400 p-4 w-full text-white text-xl mt-4 rounded" onClick={uploadToServer}>Add profile photo</button>
                {/* <button className="bg-red-400 p-4 w-full text-white text-xl mt-4 rounded">Add profile photo</button> */}
            </div>
        </form>
    )
}

export default Test;