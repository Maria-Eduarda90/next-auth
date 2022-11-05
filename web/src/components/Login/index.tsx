import Link from 'next/link';
import { Aside } from '../Aside';
import { Button } from '../Button';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Login(){
    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    async function handleSignIn(data: any){
        try {
            await signIn(data);
        } catch(error: any) {
            const message = error.response.data.message;
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return(
        <div className={styles.container}>
            <Aside/>

            <main>
                <div className={styles.title}>
                    <h1>Seja bem vindo!</h1>
                    <h4>Faça login em sua conta e comece a usar</h4>
                </div>
                <form onSubmit={handleSubmit(handleSignIn)}>
                    <section>
                        <div>
                            <label htmlFor="">Endereço de email</label>
                            <input
                             className={styles.input}
                             {...register('email')}
                             name="email"
                             type="email" 
                             placeholder="johndoe@example.com" 
                            />
                        </div>

                        <div>
                            <label htmlFor="">Sua senha</label>
                            <input
                                className={styles.input}
                                {...register('password')}
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
                    <Link href="/password-recovery">
                        <a>Esqueceu sua senha?</a>
                    </Link>
                    <Link href="/sign-up">
                        Não possui uma conta? Crie uma agora!
                    </Link>
                    <ToastContainer />
                </div>
            </main>
        </div>
    );
}