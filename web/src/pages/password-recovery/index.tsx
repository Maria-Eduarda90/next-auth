import Link from 'next/link';
import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';
import styles from './styles.module.scss';

export default function PasswordRecovery(){
    return(
        <div className={styles.container}>
            <Aside/>

            <main>
                <div className={styles.title}>
                    <h1>Esqueceu a senha?</h1>
                    <h4>Digite seu e-mail e você receberá um link para alterar sua senha.</h4>
                </div>
                <form>
                    <section>
                        <div>
                            <label htmlFor="">Endereço de email</label>
                            <input
                             className={styles.input}
                             name="email"
                             type="text"
                             placeholder="johndoe@example.com" 
                            />
                        </div>
                    </section>

                    <Button type="submit">
                        Recuperar senha
                    </Button>
                </form>

                <div className={styles.links}>
                    <Link href="/">
                        Voltar para a tela de login!
                    </Link>
                </div>
            </main>
        </div>
    );
}