import { api } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.scss';
import { FormEvent, useState } from 'react';

type FormModalBlogType = {
    onClick: () => void;
}

export function FormModalBlog(props: FormModalBlogType){
    const [sendUrl, setSendUrl] = useState('');
    const [sendTitle, setSendTitle] = useState('');
    const [sendDescription, setSendDescription] = useState('');

    async function handleSendBlog(e: FormEvent) {
        e.preventDefault();

        if (sendUrl === null && sendUrl === ""
         || sendTitle === null && sendTitle === ""
         || sendDescription === null && sendDescription === ""
        ){
            return toast.error('os campos não podem ser limpos', {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        const data = {
            url: sendUrl,
            title: sendTitle,
            description: sendDescription,
        }

        await api.post('blog', data);

        toast.success('Blog criado com sucesso', {
            position: toast.POSITION.TOP_RIGHT
        });

        setSendUrl("");
        setSendTitle("");
        setSendDescription("");
    }

    return(
        <>
        <div className={styles.modal}>
            <h1>Crie um blog de sua preferência :)</h1>
            
            <form onSubmit={handleSendBlog}>
                <fieldset>
                    <legend>Url do Blog</legend>
                    <input
                     type="url" 
                     name="url"
                     id=""
                     onChange={e => setSendUrl(e.target.value)}
                     />
                </fieldset>
                <fieldset>
                    <legend>Titulo completo do Blog</legend>
                    <input
                    type="text" 
                     name="title" 
                     id=""
                     onChange={e => setSendTitle(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <legend>Descrição completa do Blog</legend>
                    <textarea
                     name="description"
                     onChange={e => setSendDescription(e.target.value)}
                     />
                </fieldset>

                <button>Criar blog</button>
                
            </form>
            <button {...props}>Cancelar</button>
            
        </div>
        <ToastContainer />
        </>
    );
}