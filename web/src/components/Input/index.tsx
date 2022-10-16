import { InputProps } from "../../data/@types/Input";
import styles from './styles.module.scss';

export function Input(props: InputProps){
    return(
        <input className={styles.input} {...props}/>
    );
}