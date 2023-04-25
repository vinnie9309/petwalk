'use client';
import Link from "next/link";
import logo from '../../public/assets/images/logo.png';
import Image from "next/image";
import './Header.css';
import { useDispatch, useSelector } from "react-redux";
import { getStoreData } from "../forms/RegistrationComplete";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { storeActions } from "../../app/redux/store";
import { useState } from "react";


const Header = () => {
    const getLoginState = useSelector<getStoreData>( state => state.dataStore.userLoggedin );
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(storeActions.setUserLogin(false));
        await signOut(auth);
    }
    const [hideMenu, setHideMenu] = useState(true);
    const showMenu = () => {
        setHideMenu(state => !state)
    }
    return (
        <header className="flex justify-center items-center mb-5 shadow-md w-full fixed  bg-white z-50 top-0">
            <nav className="flex items-center sm:flex-row w-full max-w-6xl justify-between">
                <div className="ml-0 mr-0"><Image src={logo} alt="pesitter logo" height="120" width="160" /></div>
                <div className={`${hideMenu ? 'hidden' : 'flex'} sm:flex sm:ml-8 sm:mr-0 flex-col sm:flex-row grow sm:items-center text-center justify-around`}>
                    <div className="flex items-center ml-0 mr-0 text-lg flex-col sm:flex-row">
                        <Link href="/sitter" className="nav-link relative mx-2 group">Станете Гледач</Link>
                        <Link href="/sitter" className="nav-link relative mx-2">Намерете Гледач</Link>
                        <Link href="/sitter" className="nav-link relative mx-2">Контакти</Link>
                        <Link href="/help" className="nav-link relative mx-2">Помощ</Link>
                    </div>
                    <div className="flex items-center sm:mr-0 sm:ml-2 flex-col sm:flex-row">
                        {
                            getLoginState ?
                                <>
                                    <Link href="/" className="nav-link relative mx-2">Профил</Link>
                                    <button className="nav-link relative mx-2" onClick={handleLogout}>Изход</button>
                                </>
                                :
                                <>
                                    <Link href="/register/regOptions" className="bg-slate-400 text-white px-4 py-2 rounded sm:mr-5">Намерете работа</Link>
                                    <Link href="/login" className="nav-link relative mx-2">Вход</Link>
                                    <Link href="/register/regOptions" className="bg-red-500 text-white px-4 py-2 rounded sm:ml-5">Регистрация</Link>
                                </>
                        }
                    </div>
                </div>
                <button className="mx-4 sm:hidden" onClick={showMenu}>
                    burger button
                </button>
            </nav>
        </header>
    )
}

export default Header;
