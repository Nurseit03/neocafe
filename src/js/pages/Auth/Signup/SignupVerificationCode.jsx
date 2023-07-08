import React from 'react';
import VerificationCode from '../../../../components/Auth/VerificationCode';

const SignupVerificationCode = () => {
    const data = JSON.parse(localStorage.getItem('phone_number'));
    const phone_number = data.phone_number;

    return (
        <div className='auth'>
            <VerificationCode title='СМС код' requestUrl='someurl' nextPage='/Main' subtitle={`Код был отправлен на номер ${phone_number}`}/>
        </div>
    )
}

export default SignupVerificationCode
