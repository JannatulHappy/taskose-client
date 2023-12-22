import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    // Create a password-based account
    const registerUserWithEmailAndPassword = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in a user with an email address and password
    const logInWithEmailAndPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false)
        });
        return () => unsubscribe();
    }, []);

    const authentication = { isLoading, user, registerUserWithEmailAndPassword, logInWithEmailAndPassword }

    return <AuthContext.Provider value={authentication}>{children}</AuthContext.Provider>
};

export default AuthProvider;