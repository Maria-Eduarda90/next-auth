import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Avatar } from '../Avatar';
import { DropdownMenu } from '../DropdownMenu';
import styles from './styles.module.scss';

export function Header(){
    const { user } = useContext(AuthContext);
    return(
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <h1>Blog</h1>

                <div className={styles.content}>
                    <Avatar />
                    <p>{user?.firstname} {user?.secondname}</p>
                    <DropdownMenu />
                </div>
            </div>
        </header>
    );
}