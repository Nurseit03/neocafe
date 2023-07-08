import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCode from 'react-auth-code-input';


const VerificationCode = ({ title, subtitle, requestUrl, nextPage }) => {
    const [verificationCode, setVerificationCode] = useState('');
    const [isVerificationCodeComplete, setIsVerificationCodeComplete] = useState(false);
    const navigate = useNavigate();
  
    const handleOnChangeVerificationCode = (code) => {
      setVerificationCode(code);
      setIsVerificationCodeComplete(code.length === 4);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
        verification_code: verificationCode
      };
      console.log('UserData:', data);
      navigate(`${nextPage}`);
    };
  
    return (
      <>
        <div className='auth__container'>
          <p className='auth__container__title'>{title}</p>
          <p className='auth__container__subtitle'>{subtitle}</p>
          <form onSubmit={handleSubmit} className="auth__form">
            <p className='auth__form__title'>Введите код</p>
            <AuthCode
              length={4}
              onChange={handleOnChangeVerificationCode}
              allowedCharacters="numeric"
              containerClassName="verification_code__container"
              inputClassName="verification_code"
            />
            <button
              type='submit'
              className={`button ${isVerificationCodeComplete ? '--active__green' : '--disabled__dark'}`}
              disabled={!isVerificationCodeComplete}
            >
              Далее
            </button>
          </form>
        </div>
      </>
    );
  };
  
  export default VerificationCode;
  
