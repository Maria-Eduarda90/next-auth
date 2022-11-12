import styles from './styles.module.scss';

export function Search(){
    return(
        <input
         type="search" 
         name="" 
         id="" 
         className={styles.search}
         placeholder="Pesquise por um blog..."
        />
    );
}