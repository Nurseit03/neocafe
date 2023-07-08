import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumber = ({ title, requestUrl, nextPage }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberComplete, setIsPhoneNumberComplete] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('Neocafe_UserData'));
    const updatedData = {
        ...existingData,
        phone_number: phoneNumber
    };
    localStorage.setItem('Neocafe_UserData',JSON.stringify(updatedData) );
    navigate(`${nextPage}`);
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
