'use client';

import { SetStateAction, useEffect, useState } from "react";
import './style.css';
import defaultUserImg from '../../public/assets/images/icons/dog-walking.webp';
import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";

const FindSitters = () => {
    const [ storeUsers, setStoreUsers ]: any[] = useState([]);
    const [ userImageList, setUserImageList ] = useState([]);
    const userImageLisRef = ref( storage, "/profileImages" );

    useEffect( () => {
        const getResponse =  async () => {
            const fetchUsers = await fetch('https://petwalker-d43e0-default-rtdb.europe-west1.firebasedatabase.app/petSitters.json');
            const usersTojson = await fetchUsers.json();
            // TODO: This is total BS type need to fix it
            const storeUserslocal: SetStateAction<any> = [];
            
            // TODO: Do this in a better way, no boilerplate
            for ( const user in usersTojson ) {
                const insideData: any[] = usersTojson[user].sitterData;
                const name = insideData.find( userData => userData.nameVal ).nameVal;
                const dailyRateOption = insideData.find( userData => userData.rateOption ).rateOption;
                const dailyRate = insideData.find( userData => userData.rateVal ).rateVal;
                const selectedUser = insideData.find( userData => userData.regOption ).regOption;
                const describtion = insideData.find( userData => userData.jobDescribeVal ).jobDescribeVal;
                const selectedHoods = insideData.find( userData => userData.selectedHoods )['selectedHoods'];
                const selectedServices = insideData.find( userData => userData.labelNames )['labelNames'].map( (item:any):any => item.label );
                const userImage = insideData.find( userData => userData.userImg ).userImg;
                console.log(insideData);

                //Adding only the users that have selected to be a sitter
                if ( selectedUser === 'sitter' ) {
                    storeUserslocal.push({
                        name,
                        dailyRate,
                        dailyRateOption,
                        describtion,
                        selectedHoods,
                        selectedServices,
                        userImage,
                        id: user
                    });
                }
            }
            setStoreUsers(storeUserslocal);
        }
        getResponse();

        listAll(userImageLisRef).then(res => {
            res.items.forEach( item => {
                getDownloadURL(item).then(url => {
                    setUserImageList( (prevItem): any => [...prevItem, url]);
                })
            } )
            console.log(res); 
        });
    }, [] );

    const handleChange = () => {
        console.log('handling');
    }

    const handleSearch = () => {
        console.log('the search has been submitted');
        console.log(userImageList);
    }

    // TODO: use react-window for the list
    const mappedUsers: any = storeUsers.map( (user: any): any => {
        const hoodLabels = user.selectedHoods.map( (hood: any): any => <span className="font-semibold" key={hood.id}>{` ${hood.label},`}</span> );
        const servicesLabels =  user.selectedServices.map( (serviceLabel:any):any => <strong key={user.id + Math.floor( Math.random() * 1000 )}>{`${serviceLabel}, `}</strong> );

        return (
            <div className="flex lg:flex-row flex-col items-center w-full border bg-gray-100 my-5 shadow-lg p-5 rounded-md" key={user.id}>
                <div className="p-5">
                    <Image src={ user.userImage? user.userImage : defaultUserImg } alt="user profile image" width="70" height="40" />
                </div>
                <div>
                    <h1 className="text-2xl font-medium">{user.name}</h1>
                    <div>
                        <span>{user.dailyRate}лв на </span>
                        <span>{user.dailyRateOption === 'day' ? 'ден' : 'час'}</span>
                        <p className="my-3">Избрани квартали: { hoodLabels }</p>
                        <p>Предлагани услуги: { servicesLabels }</p>
                        <p className="my-3">{user.describtion}</p>
                    </div>
                </div>
            </div>
        )
    } );

    return (
        <div className="pt-44 w-full h-full bg-gray-300">
            <Header />
            <div className="flex flex-col findSitters-inner lg:flex-row mb-10">
                <div className="flex flex-col shadow-xl bg-gray-100 p-3">
                    <input onChange={handleChange} className="border rounded py-2 pl-3" type="text" placeholder="Търсете по квартал" />
                    <button className="hover:bg-gray-300 hover:text-black mt-3 border rounded bg-red-500 text-white py-1 text-lg" type="submit" onClick={handleSearch}>Търсене</button>
                </div>
                <div className="w-full lg:ml-20 p-7 border-1 border-black">
                    <h1 className="text-center text-xl mb-5">Налични гледачи в избраните квартали</h1>
                    { mappedUsers }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FindSitters;
