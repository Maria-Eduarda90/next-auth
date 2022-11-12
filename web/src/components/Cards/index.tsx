import Link from 'next/link';
import { TextUtils } from '../../utils/TextUtils';
import styles from './styles.module.scss';

export function Cards(){
    const maximumTextSize = 200;
    return(
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg" alt="" />

                <div>
                    <h1>Batman</h1>
                    <p>
                        {TextUtils.limitText('O Batman também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuzado da editora norte-americana DC', maximumTextSize)}
                    </p>

                    <Link href="#">
                        Ver mais+
                    </Link>
                </div>
            </div> 

            <div className={styles.card}>
                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg" alt="" />

                <div>
                    <h1>Batman</h1>
                    <p>
                        {TextUtils.limitText('O Batman também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuzado da editora norte-americana DC', maximumTextSize)}
                    </p>

                    <Link href="#">
                        Ver mais+
                    </Link>
                </div>
            </div> 

            <div className={styles.card}>
                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg" alt="" />

                <div>
                    <h1>Batman</h1>
                    <p>
                        {TextUtils.limitText('O Batman também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuzado da editora norte-americana DC', maximumTextSize)}
                    </p>

                    <Link href="#">
                        Ver mais+
                    </Link>
                </div>
            </div> 

            <div className={styles.card}>
                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg" alt="" />

                <div>
                    <h1>Batman</h1>
                    <p>
                        {TextUtils.limitText('O Batman também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuzado da editora norte-americana DC', maximumTextSize)}
                    </p>

                    <Link href="#">
                        Ver mais+
                    </Link>
                </div>
            </div> 

            <div className={styles.card}>
                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg" alt="" />

                <div>
                    <h1>Batman</h1>
                    <p>
                        {TextUtils.limitText('O Batman também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuzado da editora norte-americana DC', maximumTextSize)}
                    </p>

                    <Link href="#">
                        Ver mais+
                    </Link>
                </div>
            </div> 

            <div className={styles.card}>
                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg" alt="" />

                <div>
                    <h1>Batman</h1>
                    <p>
                        {TextUtils.limitText('O Batman também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuzado da editora norte-americana DC', maximumTextSize)}
                    </p>

                    <Link href="#">
                        Ver mais+
                    </Link>
                </div>
            </div> 

            <div className={styles.card}>
                <img src="https://files.tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg" alt="" />

                <div>
                    <h1>Batman</h1>
                    <p>
                        {TextUtils.limitText('O Batman também conhecido pelas alcunhas Homem-Morcego, Cavaleiro das Trevas, Cruzado Encapuzado, Maior Detetive do Mundo, é um personagem fictício e super-herói encapuzado da editora norte-americana DC', maximumTextSize)}
                    </p>

                    <Link href="#">
                        Ver mais+
                    </Link>
                </div>
            </div> 
        </div>
    );
}