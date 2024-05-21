import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import Edit from '../../components/editProfil';
import { useAtomValue } from 'jotai';
import { cookiesAtom } from '../../atoms/atom';

function Profil() {

    const cookies = useAtomValue(cookiesAtom )
    const {token, username} = cookies; 


    useEffect(() => {

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
                    console.log(data);
                })
                .catch(error => {
                    console.error('Erreur lors de la soumission du formulaire :', error);
                });

        }
    }, [token, username]);

    return (
        <div>
            {username ? (<h1>Bonjour, {username}!</h1>) : (<h1>Bonjour!</h1>)}
           <Edit/>
        </div>
    );
}
 
export default Profil;