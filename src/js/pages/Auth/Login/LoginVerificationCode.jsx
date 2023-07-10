import React from 'react';
import VerificationCode from '../../../../components/Auth/VerificationCode';

const LoginVerificationCode = () => {
    const data = JSON.parse(localStorage.getItem('Neocafe_UserData'));
    const phone_number = data.phone_number;
    return (
        <div className='auth'>
            <VerificationCode title='СМС код' subtitle={`Код был отправлен на номер ${phone_number}`} requestUrl='/login/verify' nextPage='/Main'/>
        </div>
    )
}

export default LoginVerificationCode
