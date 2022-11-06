import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies';
import { UserProps } from "../data/@types/User";
import { SignInProps } from "../data/@types/SignIn";
import { SignUpProps } from "../data/@types/Login";
import Router from 'next/router';
import api from "../api/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserProps | null;
    signIn: (data: SignInProps) => Promise<void>;
    signUp: (data: SignUpProps) => Promise<SignUpProps>;
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
            api.get(`user`).then(response => {
                setUser(response.data);
                console.log('response: ', response.data)
            })
        }
    }, []);

    async function signUp({ firstname, secondname, email, password }: SignUpProps){
        const { data } = await api.post('user', {
            firstname,
            secondname,
            email,
            password
        });

        console.log('data: ', data )

        setTimeout(function(){
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }, 1000)

        Router.push('/')
        return data;
    }

    async function signIn({ email, password }: SignInProps){
        const { data } = await api.post("login", {
            email,
            password,
        });
        console.log('data: ', data)

        setTimeout(function () {
            toast.success(data.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }, 1000)

        setCookie(undefined, 'nextauth.token', data.token.token, {
            maxAge: 60 * 60 * 1 // 1 hours
        });

        api.defaults.headers["Authorization"] = `Bearer ${data.token.token}`;

        setUser(data.user);
        console.log('datauser: ', data.user);

        Router.push('/blogs');
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}