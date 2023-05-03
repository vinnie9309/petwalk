import man from '../../public/assets/images/man-1.png';
import man2 from '../../public/assets/images/man-2.png';
import woman from '../../public/assets/images/woman.png';
import Image from "next/image";
import { useState } from 'react';
import { storage } from '../../firebase/config';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';

const UploadProfileImg = (props: any) => {
    const [ selectedImg, setSelectedImg ]: any = useState('notSelected');
    const [ nextDisabled, setNextDisabled ] = useState(true);

    const selectImage = (event: any) => {
        if ( selectedImg === 'notSelected' ) return;
        setSelectedImg( event.target.files );
    }
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const imageRef: any = ref(storage, `profileImages/${selectedImg.name + v4()}`);
        uploadBytes(imageRef, selectedImg).then( res => alert('Изображението качено') );
        props.nextFormStep();
        props.handleData({
            selectedImg
        });
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
                <input type="file" name="myImage" onChange={selectImage} className="mb-5" />
                <button className="bg-red-400 p-4 w-full text-white text-xl mt-4 rounded">Добави снимка</button>
                <button className="bg-slate-300 py-2 w-full text-white text-xl mt-4 rounded">Пропусни</button>
            </div>
        </form>
    )
}

export default UploadProfileImg;
