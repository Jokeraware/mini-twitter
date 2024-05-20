import React, { useState } from 'react';
import Cookies from 'js-cookie'

function Form() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            username: username,
            email: email,
            password: password
        };

        fetch('http://localhost:1337/api/auth/local/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                Cookies.set('token', data.jwt);
                console.log(data);
            })
            .catch(error => {
                console.error('Erreur lors de la soumission du formulaire :', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom d'utilisateur:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Adresse e-mail:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Mot de passe:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default Form;
