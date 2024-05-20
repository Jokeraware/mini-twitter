import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useAtom } from 'jotai';
import { tokenAtom, usernameAtom } from '../../atoms/atom'

function Profil() {
    const [username, setUsername] = useAtom(usernameAtom);
    const token = Cookies.get('token');


    useEffect(() => {

        // const token = Cookies.get('token');

        if (token) {
            fetch('http://localhost:1337/api/users/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(data => {
                    
                    setUsername(data.username);
                    console.log(data);
                })
                .catch(error => {
                    console.error('Erreur lors de la soumission du formulaire :', error);
                });

        }
    }, [token, setUsername]);

    return (
        <div>
            {username ? (<h1>Bonjour, {username}!</h1>) : (<h1>Bonjour!</h1>)}
        </div>
    );
}

export default Profil;
