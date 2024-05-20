import { atom } from 'jotai';

export const tokenAtom = atom(null);
export const usernameAtom = atom(null);
// export const usernameAtom = atom(null);

// const emptyUser = {
//     username: '',
// };

// export const setUser = atom(
//     (get) => get(emptyUser),
//     (get, set, newValue) => {
//         set(emptyUser, { ...get(emptyUser), ...newValue});
//     }
// );

