import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function Profil() {
    const [username, setUsername] = useState(null);

    useEffect(() => {

        const token = Cookies.get('token');

        fetch('http://localhost:1337/api/users/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                setUsername(data.username);
                console.log(data);
            })
            .catch(error => {
                console.error('Erreur lors de la soumission du formulaire :', error);
            });

    })

    return (
        <div>
            {username ? (<h1>Bonjour, {username}!</h1>) : (<h1>Bonjour!</h1>)}
        </div>
    );
}

export default Profil;
