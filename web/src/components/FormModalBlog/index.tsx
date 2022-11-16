import { api } from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.scss';
import { FormEvent, useState } from 'react';

type FormModalBlogType = {
    onClick: () => void;
}

export function FormModalBlog(props: FormModalBlogType){
    const [url, setSendUrl] = useState('');
    const [title, setSendTitle] = useState('');
    const [description, setSendDescription] = useState('');

    async function handleSendBlog(e: FormEvent) {
        e.preventDefault();

        if (!url.trim() || !title.trim() || !description.trim()){
            return toast.error('Preencha todos os campos', {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            const data = {
                url: url,
                title: title,
                description: description,
            }

            await api.post('blog', data);
            setSendUrl("");
            setSendTitle("");
            setSendDescription("");
        }

        toast.success('Blog criado com sucesso', {
            position: toast.POSITION.TOP_RIGHT
        });
  
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
                     id="url"
                     onChange={e => setSendUrl(e.target.value)}
                     value={url}
                     />
                </fieldset>
                <fieldset>
                    <legend>Titulo completo do Blog</legend>
                    <input
                    type="text" 
                     name="title" 
                     id="title"
                     onChange={e => setSendTitle(e.target.value)}
                     value={title}
                    />
                </fieldset>
                <fieldset>
                    <legend>Descrição completa do Blog</legend>
                    <textarea
                     name="description"
                     id="description"
                     onChange={e => setSendDescription(e.target.value)}
                     value={description}
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