import { GetServerSideProps } from 'next';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { parseCookies } from 'nookies';

export default function Blogs(){
    const { user } = useContext(AuthContext);
    return(
        <>
            <h1>{user?.firstname}</h1>
            <h1>{user?.secondname}</h1>
            <h1>{user?.email}</h1>
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