'use client';
import { useState } from 'react';
import './login.css';
import signIn from '../../firebase/auth/signin';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';

const Login = () => {
    const [ emailValue, setEmailValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('');

    const handleMailVal = (event: any) => {
        setEmailValue(event.target.value);
    }

    const handlePassword = (event: any) => {
        setPasswordValue(event.target.value);
    }

    const monitorState = async () => {
        await onAuthStateChanged( auth, (user) => {
            if( user ) {
                console.log(user);
            } else {
                console.log('You are NOT logged in');
            }
        } )
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        signIn( emailValue, passwordValue );
        monitorState();
        console.log('submit');
    }

    return (
        <div className='login-wrapper'>
            <form className="flex flex-col m-auto px-10 py-10 shadow-xl w-100" onSubmit={handleSubmit}>
                <h1 className="text-2xl text-center mb-5">Добре дошли обратно в Petwalk.com</h1>
                <div className="flex flex-col mb-5">
                    <label htmlFor="email">Имейл</label>
                    <input onChange={handleMailVal} className="border rounded py-2 pl-3" id="email" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone">Парола</label>
                    <input onChange={handlePassword} type="password" className="border rounded py-2 pl-3" id="phone" />
                </div>
                <div className="flex w-full">
                    <button className={`bg-red-400 p-4 w-full text-white text-xl mt-4 rounded`}>Влез</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
