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
    getCurrentUser: (id: number) => void;
}

type ElementChildren = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuhtProvider({ children }: ElementChildren){
    const [user, setUser] = useState<UserProps | null>(null);
    console.log('user', user);

    const isAuthenticated = !!user;

    // useEffect(() => {
    //     const { 'nextauth.token': token } = parseCookies();

    //     if(token){
    //         api.get(`user`).then(response => {
    //             setUser(response.data);
    //             console.log('response: ', response.data)
    //         })
    //     }
    // }, []);

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

    function getCurrentUser(id: number){
        const { 'nextauth.user': user } = parseCookies();

        if (user) {
            api.get(`me/${id}`).then(response => {
                setUser(response.data);
                JSON.parse(user);
                console.log('response: ', response.data)
            })
        }
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
            maxAge: 60 * 60 * 24 * 30, // 1 month
        });

        setCookie(undefined, 'nextauth.user', JSON.stringify(data.user), {
            maxAge: 60 * 60 * 24 * 30, // 1 month
        });

        // localStorage.setItem('@Blogs:User', JSON.stringify(data.user));

        api.defaults.headers["Authorization"] = `Bearer ${data.token.token}`;

        setUser(data.user);
        console.log('datauser: ', data.user);

        Router.push('/blogs');

        getCurrentUser(data.user.id);
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp, getCurrentUser }}>
            {children}
        </AuthContext.Provider>
    )
}