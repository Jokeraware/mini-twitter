import React from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove('token');
        console.log('ok')
        navigate('/');
    };

    return (
        <button className="btn btn-secondary my-2 my-sm-0" onClick={handleLogout}>LogOut</button>
    );
};

export default Logout;
