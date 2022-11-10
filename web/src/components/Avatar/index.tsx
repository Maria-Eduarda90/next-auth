import styles from './styles.module.scss';
import Image from 'next/image'

export function Avatar(){
    return(
        <div className={styles.containerAvatar}>
            <main className={styles.main}>
                <img
                 src={"https://github.com/Maria-Eduarda90.png"}
                 alt={"avatar"}
                 className={styles.avatar} 
                />
            </main>
        </div>
    );
}