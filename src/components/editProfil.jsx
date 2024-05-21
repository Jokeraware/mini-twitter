import React, { useState } from "react";
// import Cookies from 'js-cookie';
 import { usernameAtom } from '../atoms/atom';
import { useAtomValue, useSetAtom } from "jotai";
import { cookiesAtom } from '../atoms/atom';


function Edit() {
    const [isEditing, setIsEditing] = useState(false);
    const setUsername = useSetAtom(usernameAtom);

    const cookies = useAtomValue(cookiesAtom );
    const {token, username} = cookies; 

    // const token = Cookies.get('token')

    if (isEditing) {

        const data = {
            username: username,
        };

        fetch(`http://localhost:1337/api/users-permissions/users/me`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                setUsername(data.username);
            })
            .catch(error => {
                console.error('Erreur lors de la soumission du formulaire :', error);
            });

    }

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsEditing(!isEditing);
            }}>

                <label>
                    User name:{" "}
                    {isEditing ? (
                        <input value={username} onChange={(e) => { setUsername(e.target.value); }}
                        />
                    ) : (
                        <p>{username}</p>
                    )}
                </label>
                <button type="submit">{isEditing ? "Save" : "Edit"} Profil</button>
            </form>
        </>
    )
}

export default Edit