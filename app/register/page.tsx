'use client';
import FormContiner from "../../components/form-container/FormContainer";
import './register.css';
import logo from '../../public/assets/images/logo.png'
import Image from "next/image";
import { Provider } from "react-redux";
import store from "../store/store";
import Link from "next/link";

const Register = () => {
    return (
        <Provider store={store}>
            <div className="registration-wrapper flex flex-col items-center justify-center">
                <FormContiner />
                <div className="w-full absolute bottom-0">
                    <Link href="/">
                        <Image src={logo} alt="site logo" height="90" width="160" />
                    </Link>
                </div>
            </div>
        </Provider>
    )
}

export default Register;
