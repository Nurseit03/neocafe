import React from 'react'
import PhoneNumber from '../../../../components/Auth/PhoneNumber';

const SignupPhoneNumber = () => {
    return (
        <div className='auth'>
            <PhoneNumber title='Регистрация' requestUrl='/register/phone' nextPage='/SignupVerificationCode' isPage='signup'/>
        </div>
    )
}

export default SignupPhoneNumber
