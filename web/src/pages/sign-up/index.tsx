import Link from 'next/link';
import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';
import styles from './styles.module.scss';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUn() {
    const { register, handleSubmit } = useForm();
    const { signUp } = useContext(AuthContext);

    async function handleSignUp(data: any){
        try {
            await signUp(data);
        } catch(error: any){
            const message = error.response.data.message;
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className={styles.container}>
            <Aside />
            
            <main>
                <div className={styles.title}>
                    <h1>Seja bem vindo!</h1>
                    <h4>Crie uma conta e comece a usar</h4>
                </div>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <section>
                        <div>
                            <label htmlFor="">Primero Nome</label>
                            <input
                             {...register('firstname')}
                             className={styles.input}
                             name="firstname"
                             type="text"
                             placeholder="Digite seu primeiro nome" 
                            />
                        </div>

                        <div>
                            <label htmlFor="">Segundo Nome</label>
                            <input
                             {...register('secondname')}
                             className={styles.input}
                             name="secondname"
                             type="text" 
                             placeholder="Digite seu segundo nome" 
                             />
                        </div>

                        <div>
                            <label htmlFor="">Endereço de email</label>
                            <input
                             {...register('email')}
                             className={styles.input}
                             name="email"
                             type="email"
                             placeholder="johndoe@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="">Sua senha</label>
                            <input
                             {...register('password')}
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
                    <ToastContainer />
                </div>
            </main>
        </div>
    );
}