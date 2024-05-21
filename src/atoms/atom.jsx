import { atom } from 'jotai';
import Cookies from 'js-cookie';
// import { atomWithStorage } from 'jotai/utils';

export const tokenAtom = atom(Cookies.set('token') ? Cookies.set('token') : null);
export const usernameAtom = atom(null);


export const emptyUser = atom({
    id: '',
    username: ''
});

export const setUser = atom(
    (get) => get(emptyUser),
    (get, set, newValue) => {
        set(emptyUser, { ...get(emptyUser), ...newValue});
    }
);

export const cookiesAtom = atom(
    Cookies.get('tokenUser') ? JSON.parse(Cookies.get('tokenUser')) : null);

// // atoms/user.js

// export const userAtom = atomWithStorage('current-user', null);