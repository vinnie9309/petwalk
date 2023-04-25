'use client';

import { SetStateAction, useEffect, useState } from "react";
import './style.css';
import defaultUserImg from '../../public/assets/images/icons/dog-walking.webp';
import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const findSitters = () => {
    const [ storeUsers, setStoreUsers ]: any[] = useState([]);

    useEffect( () => {
        const getResponse =  async () => {
            const fetchUsers = await fetch('https://petwalker-d43e0-default-rtdb.europe-west1.firebasedatabase.app/petSitters.json');
            const usersTojson = await fetchUsers.json();
            // TODO: This is total BS type need to fix it
            const storeUserslocal: SetStateAction<any> = [];
            
            for ( const user in usersTojson ) {
                const insideData: any[] = usersTojson[user].sitterData;
                const name = insideData.find( userData => userData.nameVal ).nameVal;
                const dailyRateOption = insideData.find( userData => userData.rateOption ).rateOption;
                const dailyRate = insideData.find( userData => userData.rateVal ).rateVal;
                const selectedUser = insideData.find( userData => userData.regOption ).regOption;
                const describtion = insideData.find( userData => userData.jobDescribeVal ).jobDescribeVal;
                const selectedHoods = insideData.find( userData => userData.selectedHoods )['selectedHoods'];
                console.log(selectedHoods);

                if ( selectedUser === 'sitter' ) {
                    storeUserslocal.push({
                        name,
                        dailyRate,
                        dailyRateOption,
                        describtion,
                        selectedHoods,
                        id: user
                    });
                }
            }
            setStoreUsers(storeUserslocal);
        }
        getResponse();
    }, [] );

    const mappedUsers: any = storeUsers.map( (user: any): any => {
        const hoodLabels = user.selectedHoods.map( (hood: any): any => <span className="font-semibold" key={hood.id}>{` ${hood.label}`}</span> );

        return (
            <div className="flex items-center w-full border bg-gray-100 my-5 shadow-lg p-5 rounded-md" key={user.id}>
                <div className="p-5">
                    <Image src={defaultUserImg} alt="dog-walker-icon" width="60" height="30" />
                </div>
                <div>
                    <h1 className="text-xl font-medium">{user.name}</h1>
                    <div>
                        <span>{user.dailyRate}лв на </span>
                        <span>{user.dailyRateOption === 'day' ? 'ден' : 'час'}</span>
                        <p className="my-3">Избрани квартали: { hoodLabels }</p>
                        <p className="my-3">{user.describtion}</p>
                    </div>
                </div>
            </div>
        ) 
    } )

    return (
        <div className="pt-44 w-full h-full bg-gray-300">
            <Header />
            <div className="flex flex-col findSitters-inner lg:flex-row mb-10">
                <div className="shadow-xl bg-gray-100">
                    The sidebar with the filters
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

export default findSitters;
