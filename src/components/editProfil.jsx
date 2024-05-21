import React, { useState, useEffect } from "react";
import { useSetAtom, useAtomValue } from "jotai";
import { usernameAtom, cookiesAtom } from '../atoms/atom';

function Edit() {
    const [isEditing, setIsEditing] = useState(false);
    const [localUsername, setLocalUsername] = useState("");
    const setUsername = useSetAtom(usernameAtom);
    const cookies = useAtomValue(cookiesAtom);
    const { token, username } = cookies;

    useEffect(() => {
        if (isEditing) {
            setLocalUsername(username);
        }
    }, [isEditing, username]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            const data = { username: localUsername };

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
                    setUsername(data.username); // Mise à jour de l'atome `usernameAtom`
                    setIsEditing(false);
                })
                .catch(error => {
                    console.error('Erreur lors de la soumission du formulaire :', error);
                });
        } else {
            setIsEditing(true);
        }
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <label>
                    User name:{" "}
                    {isEditing ? (
                        <input
                            value={localUsername}
                            onChange={(e) => setLocalUsername(e.target.value)}
                        />
                    ) : (
                        <p>{username}</p>
                    )}
                </label>
                <button type="submit">{isEditing ? "Save" : "Edit"} Profil</button>
            </form>
        </>
    );
}

export default Edit;
