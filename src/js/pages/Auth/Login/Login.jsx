import React from 'react'
import PhoneNumber from '../../../../components/Auth/PhoneNumber';

const Login = () => {
    return (
        <div className='auth'>
            <PhoneNumber title='Вход' requestUrl='someurl' nextPage='/LoginVerificationCode'/>
        </div>
    )
}

export default Login
