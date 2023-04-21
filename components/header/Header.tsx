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


const Header = () => {
    const getLoginState = useSelector<getStoreData>(state => state.dataStore.userLoggedin);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        dispatch(storeActions.setUserLogin(false));
        await signOut(auth);
    }

    return (
        <header className="flex justify-center items-center mb-5 shadow-md w-full fixed  bg-white z-50 top-0">
            <nav className="flex items-center flex-row w-full max-w-6xl">
                <div className="ml-0 mr-0"><Image src={logo} alt="pesitter logo" height="120" width="160" /></div>
                <div className="flex ml-8 mr-0 grow justify-between items-center">
                    <div className="flex items-center ml-0 mr-0 text-lg">
                        <Link href="/sitter" className="nav-link relative mx-2 group">Станете Гледач</Link>
                        <Link href="/sitter" className="nav-link relative mx-2">Намерете Гледач</Link>
                        <Link href="/sitter" className="nav-link relative mx-2">Контакти</Link>
                        <Link href="/help" className="nav-link relative mx-2">Помощ</Link>
                    </div>
                    <div className="flex items-center mr-0 ml-2">
                        {
                            getLoginState ?
                                <>
                                    <Link href="/" className="nav-link relative mx-2">Профил</Link>
                                    <button className="nav-link relative mx-2" onClick={handleLogout}>Изход</button>
                                </>
                                :
                                <>
                                    <Link href="/register/regOptions" className="bg-slate-400 text-white px-4 py-2 rounded mr-5">Намерете работа</Link>
                                    <Link href="/login" className="nav-link relative mx-2">Вход</Link>
                                    <Link href="/register/regOptions" className="bg-red-500 text-white px-4 py-2 rounded ml-5">Регистрация</Link>
                                </>
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
