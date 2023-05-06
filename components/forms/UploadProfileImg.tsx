import man from '../../public/assets/images/man-1.png';
import man2 from '../../public/assets/images/man-2.png';
import woman from '../../public/assets/images/woman.png';
import Image from "next/image";
import { useEffect, useState } from 'react';
import { storage } from '../../firebase/config';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const UploadProfileImg = (props: any) => {
    const [ selectedImg, setSelectedImg ]: any = useState(null);
    const [ uploadingImg, setUploadingImg ] = useState(false);
    const [ userImageUrl, setUserImageUrl ] = useState('');
    const [ showSuccessSection, setShowSuccessSection ] = useState(false);
    const userImageLisRef = ref( storage, "/profileImages" );

    const selectImage = (event: any) => {
        setSelectedImg( event.target.files[0]);
        const image = event.target.files[0];
        const imageRef: any = ref(storage, `profileImages/${image.name + v4()}`);
        uploadBytes(imageRef, image).then( (snapshot: any): any => {
            getDownloadURL(snapshot.ref).then((url) => {
                setUserImageUrl(url);
            });
            // props.handleData({userImg: userImageUrl});
            setUploadingImg(false);
            // props.nextFormStep();
            setShowSuccessSection(true);
        } );
        if ( selectedImg === null ) return;
    }
    
    useEffect( () => {
        listAll(userImageLisRef).then(res => {
            res.items.forEach( item => {
                getDownloadURL(item).then(url => {
                    setUserImageUrl(url);
                })
            } )
            console.log(res);
        });
    }, [] );

    const handleSkipStep = () => {
        props.nextFormStep('skip');
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const imageRef: any = ref(storage, `profileImages/${selectedImg.name + v4()}`);
        setUploadingImg(true);
        //Uploading the image to firebase storage and passing the image url to redux
        // uploadBytes(imageRef, selectedImg).then( (snapshot: any): any => {
        //     getDownloadURL(snapshot.ref).then((url) => {
        //         setUserImageUrl(url);
        //     });
        //     // props.handleData({userImg: userImageUrl});
        //     setUploadingImg(false);
        //     // props.nextFormStep();
        //     setShowSuccessSection(true);
        // } );
    }

    // const handleSuccessClick = () => {
    //     props.handleData({userImg: userImageUrl});
    //     console.log(userImageUrl);
    //     // props.nextFormStep();
    // }

    return (
        uploadingImg ?
        <h1 className='text-center'>Loading...</h1> 
        :
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
                    <button onClick={handleSkipStep} className="bg-slate-300 py-2 w-full text-white text-xl mt-4 rounded">Пропусни</button>
                </div>
            </form>
            // : 
            // <div>
            //     <h1 className="text-2xl text-center mb-5">Снимката изглежда супер!</h1>
            //     <p>Thank you for making a good first impression! This photo will show up in search results, your profile page, and inbox.</p>
    
            //     <div className="flex w-full">
            //         <button onClick={handleSuccessClick} className="bg-red-400 p-4 w-full text-white mt-4 rounded">Напред</button>
            //     </div>
            // </div>
    )
}

export default UploadProfileImg;
