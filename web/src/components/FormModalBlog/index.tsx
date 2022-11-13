import styles from './styles.module.scss';

type FormModalBlogType = {
    onClick: () => void;
}

export function FormModalBlog(props: FormModalBlogType){
    return(
        <div className={styles.modal}>
            <h1>Crie um blog de sua preferência :)</h1>
            <form >
                <fieldset>
                    <legend>Url do Blog</legend>
                    <input type="url" name="" id="" />
                </fieldset>
                <fieldset>
                    <legend>Titulo completo do Blog</legend>
                    <input type="text" name="" id="" />
                </fieldset>
                <fieldset>
                    <legend>Descrição completa do Blog</legend>
                    <textarea />
                </fieldset>

                <button>Criar blog</button>
            </form>
            <button {...props}>Cancelar</button>
        </div>
    );
}