'use client';

import { useEffect, useState } from "react";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/config";
import ListingItems from "../../components/listingItems/ListingItems";
import { getUsers } from '../../app/api/helper/users/userService';

const FindSitters = () => {
    const [ storeUsers, setStoreUsers ]: any[] = useState([]);
    const [ userImageList, setUserImageList ] = useState([]);
    const userImageLisRef = ref( storage, "/profileImages" );

    useEffect( () => {
        getUsers('sitters').then( res => setStoreUsers(res) );

        listAll(userImageLisRef).then(res => {
            res.items.forEach( item => {
                getDownloadURL(item).then(url => {
                    setUserImageList( (prevItem): any => [...prevItem, url]);
                });
            } );
        });
    }, [] );

    return (
        <ListingItems userData={storeUsers} />
    )
}

export default FindSitters;
