import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('Neocafe_UserData'));
    const returnpage = () => {
        navigate('/');
    }
    return (
        <>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <b>MAIN PAGE</b>
            <p>{userData.first_name}</p>
            <p>{userData.last_name}</p>
            <p>{userData.date_of_birth}</p>
            <p>{userData.phone_number}</p>
            <button onClick={returnpage} >RETURN</button>
        </div>
        </>
    )
}

export default Main
