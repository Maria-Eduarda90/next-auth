import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

export default function PasswordRecovery(){
    return(
        <div className={styles.container}>
            <aside className={styles.aside} />

            <main>
                <form>
                    <div>
                        <h1>Esqueceu a senha?</h1>
                        <h4>Digite seu e-mail e você receberá um link para alterar sua senha.</h4>
                    </div>

                    <section>
                        <div>
                            <label htmlFor="">Endereço de email</label>
                            <Input type="text" placeholder="johndoe@example.com" />
                        </div>
                    </section>

                    <Button type="submit">
                        Recuperar senha
                    </Button>
                </form>
            </main>
        </div>
    );
}