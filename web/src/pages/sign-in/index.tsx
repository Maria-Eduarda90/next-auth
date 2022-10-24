import Link from 'next/link';
import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

export default function SignIn() {
    return (
        <div className={styles.container}>
            <Aside />

            <main>
                <form>
                    <div>
                        <h1>Seja bem vindo!</h1>
                        <h4>Crie uma conta e comece a usar</h4>
                    </div>

                    <section>
                        <div>
                            <label htmlFor="">Primero Nome</label>
                            <Input type="text" placeholder="Nome" />
                        </div>

                        <div>
                            <label htmlFor="">Segundo Nome</label>
                            <Input type="text" placeholder="Sobrenome" />
                        </div>

                        <div>
                            <label htmlFor="">Endereço de email</label>
                            <Input type="email" placeholder="johndoe@example.com" />
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
                    <Link href="/">
                        Já possui uma conta? faça login agora!
                    </Link>
                </div>
            </main>
        </div>
    );
}