'use client';

import { useRouter } from 'next/navigation'; 
import Chat from "../../../components/chat/Chat";
import Header from "../../../components/header/Header";

const UserChats = () => {

    const router = useRouter();
    
    return (
        <div>
            <p>Dynamic user chats</p>
            <Header />
            <Chat />
        </div>
    )
}

export default UserChats;