import styles from './styles.module.scss';

export function Avatar(){
    return(
        <div className={styles.containerAvatar}>
            <main className={styles.main}>
                <img src="https://github.com/Maria-Eduarda90.png" alt="" className={styles.avatar} />
            </main>
        </div>
    );
}