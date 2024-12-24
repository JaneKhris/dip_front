import { createContext } from "react";

export const AuthContext = createContext({
    isAuth: '',
    setToken: () => {},
    profile: {
        id: '',
        name: '',
        isStaff: ''
    },
    setProfile: () => {},
})