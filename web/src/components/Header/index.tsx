import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useAvatar } from '../../hooks/useAvatar';
import { Avatar } from '../Avatar';
import { DropdownMenu } from '../DropdownMenu';
import { Profile } from '../Profile';
import styles from './styles.module.scss';

export function Header(){
    const { user } = useContext(AuthContext);
    const { avatar } = useAvatar();

    return(
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <h1>Blog</h1>

                <div className={styles.content}>
                    {/* {
                        avatar ? <Avatar /> : <Profile />
                    } */}
                    <Profile />
                    <p>{user?.firstname} {user?.secondname}</p>
                    <DropdownMenu />
                </div>
            </div>
        </header>
    );
}