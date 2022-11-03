import Link from 'next/link';
import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

export default function SignUn() {
    return (
        <div className={styles.container}>
            <Aside />

            <main>
                <div className={styles.title}>
                    <h1>Seja bem vindo!</h1>
                    <h4>Crie uma conta e comece a usar</h4>
                </div>
                <form>
                    <section>
                        <div>
                            <label htmlFor="">Primero Nome</label>
                            <input
                             className={styles.input}
                             name="firstname"
                             type="text"
                             placeholder="Digite seu primeiro nome" 
                            />
                        </div>

                        <div>
                            <label htmlFor="">Segundo Nome</label>
                            <input
                             className={styles.input}
                             name="secondname"
                             type="text" 
                             placeholder="Digite seu segundo nome" 
                             />
                        </div>

                        <div>
                            <label htmlFor="">Endereço de email</label>
                            <input
                                className={styles.input}
                                name="email"
                                type="email"
                                placeholder="johndoe@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Sua senha</label>
                            <input
                                className={styles.input}
                                name="password"
                                type="password"
                                placeholder="**************"
                            />
                        </div>
                    </section>

                    <Button type="submit">
                        Entrar na plataforma
                    </Button>
                </form>

                <div className={styles.links}>
                    <Link href="/">
                        Já possui uma conta? faça login agora!
                    </Link>
                </div>
            </main>
        </div>
    );
}