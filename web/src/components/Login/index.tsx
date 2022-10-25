import Link from 'next/link';
import { Aside } from '../Aside';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './styles.module.scss';

export function Login(){
    return(
        <div className={styles.container}>
            <Aside/>

            <main>
                <form>
                    <div>
                        <h1>Seja bem vindo!</h1>
                        <h4>Faça login em sua conta e comece a usar</h4>
                    </div>

                    <section>
                        <div>
                            <label htmlFor="">Endereço de email</label>
                            <Input type="text" placeholder="johndoe@example.com" />
                        </div>

                        <div>
                            <label htmlFor="">Sua senha</label>
                            <Input type="password" placeholder="**************" />
                        </div>
                    </section>

                    <Button type="submit">
                        Entrar na plataforma
                    </Button>
                </form>
                
                <div className={styles.links}>
                    <Link href="/password-recovery">
                        <a>Esqueceu sua senha?</a>
                    </Link>
                    <Link href="/sign-in">
                        Não possui uma conta? Crie uma agora!
                    </Link>
                </div>
            </main>
        </div>
    );
}