import { createContext, ReactNode } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
}

type ElementChildren = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuhtProvider({ children }: ElementChildren){
    const isAuthenticated = false;

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}