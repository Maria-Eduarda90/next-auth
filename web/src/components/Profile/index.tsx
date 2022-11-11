import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import styles from './styles.module.scss';

export function Profile(){
    const { user } = useContext(AuthContext);

    return(
        <div className={styles.containerAvatar}>
            <p>{user?.firstname[0]}{user?.secondname[0]}</p>
        </div>
    );
}