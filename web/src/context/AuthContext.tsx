import { createContext, ReactNode, useEffect, useState } from "react";
import { SignInProps } from "../data/@types/SignIn";
import { setCookie, parseCookies } from 'nookies';
import { UserProps } from "../data/@types/User";
import Router from 'next/router';
import api from "../api/api";

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserProps | null;
    signIn: (data: SignInProps) => Promise<void>;
}

type ElementChildren = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuhtProvider({ children }: ElementChildren){
    const [user, setUser] = useState<UserProps | null>(null);

    const isAuthenticated = !!user;

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies();

        if(token){
            api.get('user').then(response => {
                setUser(response.data[0])
                console.log('response: ', response.data[0])
            })
        }
    }, [])

    async function signIn({ email, password }: SignInProps){
        const { data } = await api.post("login", {
            email,
            password,
        })

        setCookie(undefined, 'nextauth.token', data.token.token, {
            maxAge: 60 * 60 * 1 // 1 hours
        })

        api.defaults.headers["Authorization"] = `Bearer ${data.token.token}`;

        setUser(data.user);
        console.log('token', data.token.token);

        Router.push('/blogs');
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}