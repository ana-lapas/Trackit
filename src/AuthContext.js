import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [token, setToken] = useState("")
    const [infosUsuario, setInfosUsuario] = useState("")
    const [userHabits, setUserHabits] = useState([])
    const [form, setForm] = useState({ email: "", password: "" })
    const [habToday, setHabToday] = useState([])
    const [userHabitsToday, setUserHabitsToday] = useState([])
    const [progress, setProgress] = useState(0);
    return (
        <AuthContext.Provider value={{
            token, setToken, infosUsuario, setInfosUsuario, userHabits, setUserHabits,
            form, setForm, setHabToday, habToday, userHabitsToday, setUserHabitsToday, setProgress, progress
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;