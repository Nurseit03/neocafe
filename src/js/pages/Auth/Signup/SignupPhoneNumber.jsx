import React from 'react'
import PhoneNumber from '../../../../components/Auth/PhoneNumber';

const SignupPhoneNumber = () => {
    return (
        <div className='auth'>
            <PhoneNumber title='Регистрация' requestUrl='someurl' nextPage='/SignupVerificationCode'/>
        </div>
    )
}

export default SignupPhoneNumber
