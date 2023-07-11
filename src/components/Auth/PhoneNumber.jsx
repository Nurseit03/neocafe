import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from '../../js/api/axios';

const PhoneNumber = ({ title, requestUrl, nextPage, isPage }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberComplete, setIsPhoneNumberComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(isPage === 'login'){
      const updatedData = {
          phone_number: phoneNumber
      };
      localStorage.setItem('Neocafe_UserData',JSON.stringify(updatedData) );
      handleSignup(updatedData);
    } else if (isPage === 'signup'){
      const existingData = JSON.parse(localStorage.getItem('Neocafe_UserData'));
      const updatedData = {
          ...existingData,
          phone_number: phoneNumber
      };
      localStorage.setItem('Neocafe_UserData',JSON.stringify(updatedData) );
      handleSignup(updatedData);
    }
  };

  const handleSignup = async (updatedData) => {
    try {
      const response = await axios.post(`${requestUrl}`, updatedData);
      if (response.status === 201 || response.status === 200) {
        localStorage.setItem('verification-code', JSON.stringify(response.data));
        const verificationCode = JSON.parse(localStorage.getItem('verification-code'));
        if (!(response.status === 201 || response.status === 200)) {
          console.log(response);
          throw new Error("Network response was not ok");
        }
        navigate(`${nextPage}`);
        console.log('Response:', response);
        console.log('Verify code:', verificationCode);
        return response;
      }
    } catch (error) {
      console.log("Error:", error);
      if(error.message === 'Request failed with status code 500'){
        setErrorMessage('Данный номер телефона уже зарегистрирован');
      }
    }
  };
  
  return (
    <>
    <div className='auth__container'>
      <p className='auth__container__title'>{title}</p>
      <form onSubmit={handleSubmit} className="auth__form">
        <div className="auth__input-container">
          <label htmlFor='phone_number'>Номер телефона</label>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            country={'kg'}
            placeholder="Введите номер телефона"
            value={phoneNumber}
            onChange={setPhoneNumber}
            limitMaxLength={true}
            onChange={(phoneNumber) => {
              if(phoneNumber>1){
                setPhoneNumber(phoneNumber);
                setIsPhoneNumberComplete(phoneNumber.length === 12);
                }
              }}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <button
          type='submit'
          className={`button ${isPhoneNumberComplete ? '--active__green' : '--disabled__dark'}`}
          disabled={!isPhoneNumberComplete}
        >
          Далее
        </button>
      </form>
    </div>
    </>
  );
};

export default PhoneNumber;
