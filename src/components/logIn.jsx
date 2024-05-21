import React, { useState } from 'react';
import Cookies from 'js-cookie'
import { useSetAtom } from 'jotai';
import { tokenAtom, usernameAtom} from '../atoms/atom';


function LogIn() {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const setToken = useSetAtom(tokenAtom);
    const setUsername = useSetAtom(usernameAtom);

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            identifier: username,
            password: password
        };

        fetch('http://localhost:1337/api/auth/local', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                Cookies.set('tokenUser',JSON.stringify({ token: data.jwt, username: data.user.username, id: data.user.id }));
                setToken(data.jwt);
                setUsername(data.username);

                console.log(data);
                console.log(data.user.username);
          
            })
            .catch(error => {
                console.error('Erreur lors de la soumission du formulaire :', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                nom:
                <input type="text" value={username} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Mot de passe:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit">Se connecter</button>
        </form>
    );
}

export default LogIn;
