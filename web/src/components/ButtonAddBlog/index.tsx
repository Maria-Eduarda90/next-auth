import { ReactNode } from 'react';
import styles from './styles.module.scss';

export type ButtonAddBlogType = {
    onClick?: () => void;
    children: ReactNode;
}

export function ButtonAddBlog(props: ButtonAddBlogType){
    return(
        <button className={styles.buttonAddBlog} {...props}>
            {props.children}
        </button>
    );
}