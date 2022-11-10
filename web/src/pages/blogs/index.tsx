import { GetServerSideProps } from 'next';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { parseCookies } from 'nookies';
import { Header } from '../../components/Header';

import styles from './styles.module.scss';
import { getApiClient } from '../../api/apiClient';
import { api } from '../../api/api';

export default function Blogs(){

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