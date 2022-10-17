import { ButtonType } from '../../data/@types/Button';
import styles from './styles.module.scss';

export function Button(props: ButtonType){
    return(
        <button {...props} className={styles.button}/>
    );
}