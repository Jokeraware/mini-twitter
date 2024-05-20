import { atom } from 'jotai';

export const tokenAtom = atom(null);
export const usernameAtom = atom(null);
// export const usernameAtom = atom(null);

const emptyUser = {
    username: '',
};

export const setUser = atom(
    (get) => get(emptyUser),
    (get, set, newValue) => {
        set(emptyUser, { ...get(emptyUser), ...newValue});
    }
);

// export const discAreaAtom = atom(
//     (get) => {
//         const radius = get(radiusAtom);
//         return Math.pow(radius, 2) * Math.PI;
//     },
//     (get, set, newArea) => {
//         const newRadius = Math.sqrt(newArea / Math.PI);
//         set(radiusAtom, newRadius);
//     }
// );