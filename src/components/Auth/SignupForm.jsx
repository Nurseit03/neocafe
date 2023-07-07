import React, { useState } from 'react';

const SignupForm = ({ title }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [userData, setUserData] = useState(null);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleDateOfBirthChange = (event) => {
        setDateOfBirth(event.target.value);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            last_name: lastName,
            date_of_birth: dateOfBirth
        };
        setUserData(data);
        console.log('UserData:', data);
    };

    const isFormValid = firstName !== '' && lastName !== '' && dateOfBirth !== '';

    return (
        <div className='auth__container'>
            <p className='auth__container__title'>{title}</p>
            <form onSubmit={handleSubmit} className="auth__form">
                <div className="auth__input-container">
                    <label htmlFor="first_name">Имя</label>
                    <input
                        type="text"
                        id="first_name"
                        placeholder="Имя"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div className="auth__input-container">
                    <label htmlFor="last_name">Фамилия</label>
                    <input
                        type="text"
                        id="last_name"
                        placeholder="Фамилия"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div className="auth__input-container">
                    <label htmlFor="date_of_birth">Дата рождения</label>
                    <input
                        type="date"
                        id="date_of_birth"
                        value={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                    />
                </div>
                <button
                    type="submit"
                    className={`button ${isFormValid ? '--active__green' : '--disabled__dark'}`}
                    disabled={!isFormValid}
                >
                    Далее
                </button>
            </form>
        </div>
    )
}

export default SignupForm;
