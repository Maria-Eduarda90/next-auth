import { GetServerSideProps } from 'next';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { parseCookies } from 'nookies';
import { Header } from '../../components/Header';

import styles from './styles.module.scss';

export default function Blogs(){
    const { user } = useContext(AuthContext);
    return(
        <>
            <main className={styles.containerBlog}>
                <Header />
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