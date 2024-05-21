import React from 'react';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useSetAtom } from 'jotai';
import { tokenAtom, usernameAtom } from '../atoms/atom';

const Logout = () => {
    const navigate = useNavigate();
    const setToken = useSetAtom(tokenAtom) // ceci va permettre de rez 
    const setUsername = useSetAtom(usernameAtom)

    const handleLogout = () => {
        Cookies.remove('tokenUser');
        setToken(null);
        setUsername(null);
        console.log('déco ok');
        navigate('/');
    };

    return (
        <button className="btn btn-secondary my-2 my-sm-0" onClick={handleLogout}>LogOut</button>
    );
};

export default Logout;
