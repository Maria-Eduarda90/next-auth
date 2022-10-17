import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type ButtonType = 
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    children: React.ReactNode;
    type: string;
}