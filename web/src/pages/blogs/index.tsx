import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Header } from '../../components/Header';

import styles from './styles.module.scss';
import { Search } from '../../components/Search';
import { ButtonAddBlog } from '../../components/ButtonAddBlog';
import { Cards } from '../../components/Cards';
import { FormModalBlog } from '../../components/FormModalBlog';
import { useState } from 'react';

export default function Blogs(){
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(!modalIsOpen);
    }

    return(
        <>
            <main className={styles.containerBlog}>
                <Header />

                <section className={styles.section}>
                    <div className={styles.wrapper}>
                        <Search />
                        <ButtonAddBlog onClick={openModal}>
                            + Add blog
                        </ButtonAddBlog>
                    </div>

                    <Cards/>
                    <div className={`${styles.modalWrapper} ${modalIsOpen ? `${styles.active}` : ''}`}>
                        <FormModalBlog onClick={openModal}/>
                    </div>
                </section>
            </main>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nextauth.token']: token } = parseCookies(ctx);

    if(!token){
        return{
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}