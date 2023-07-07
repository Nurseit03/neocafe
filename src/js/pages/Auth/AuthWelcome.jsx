import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import neocafe_text from '../../../assets/neocafe_text.png';
import '../../../css/Auth/auth.css';

const AuthWelcome = () => {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/Signup');
    }

    const handleLogin = () => {
        navigate('/Login');
    }
    return (
        <>
        <div className='auth'>
            <div className='auth__container'>
                <img src={neocafe_text} alt="Neocafe"/>
                <button className='button --active__green' onClick={handleSignup}>Зарегистрироваться</button>
                <button className='button --disabled' onClick={handleLogin}>Войти</button>
            </div>
        </div>
        </>
    )
}

export default AuthWelcome;
