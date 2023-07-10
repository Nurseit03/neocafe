import React from 'react'
import PhoneNumber from '../../../../components/Auth/PhoneNumber';

const Login = () => {
    return (
        <div className='auth'>
            <PhoneNumber title='Вход' requestUrl='/login/phone' nextPage='/LoginVerificationCode' isPage='login'/>
        </div>
    )
}

export default Login
