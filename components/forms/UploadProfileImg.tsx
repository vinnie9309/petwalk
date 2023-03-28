import man from '../../public/assets/images/man-1.png';
import man2 from '../../public/assets/images/man-2.png';
import woman from '../../public/assets/images/woman.png';
import Image from "next/image";
import { useState } from 'react';

const UploadProfileImg = (props: any) => {
    const [ selectedImg, setSelectedImg ] = useState(null);
    const [ nextDisabled, setNextDisabled ] = useState(true);

    const selectImage = (event: any) => {
        console.log(event);
        setSelectedImg(event.target.files);
    }

    const uploadToServer = (event: any) => {
        console.log(event);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.nextFormStep();
        props.handleData({
            selectedImg
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="font-semibold text-2xl text-center mb-5">Добавете профилна снимка</h1>
            <p className='text-center text-slate-500 mb-5'>Добавете снимка, за да увеличите шансовете си за намиране на работа.</p>
            <div className='flex justify-evenly mb-5'>
                <Image src={man} height="120" width="80" alt="man smiling" />
                <Image src={man2} height="120" width="80" alt="man smiling" />
                <Image src={woman} height="120" width="80" alt="woman smiling" />
            </div>
            <div className='mb-5'>
                <h3 className='text-lg font-semibold mb-5'>Направете добро първо впечатление:</h3>
                <ul className='list-disc'>
                    <li>Използвайте ясна снимка на вашето лице</li>
                    <li>Застанете в центъра и се усмихнете</li>
                    <li>Избягвайте снимки с текст</li>
                </ul>
            </div>
            <div className="flex flex-col w-full">
                {/* <button disabled={ nextDisabled } className={`bg-red-400 p-4 w-full text-white text-xl mt-4 rounded ${nextDisabled ? 'disabled' : ''}`}>Next</button> */}
                <input type="file" name="myImage" onChange={selectImage} className="mb-5" />
                <button className="bg-red-400 p-4 w-full text-white text-xl mt-4 rounded" onClick={uploadToServer}>Добави снимка</button>
                {/* <button className="bg-red-400 p-4 w-full text-white text-xl mt-4 rounded">Add profile photo</button> */}
            </div>
        </form>
    )
}

export default UploadProfileImg;
