import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Header } from '../../components/Header';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Search } from '../../components/Search';
import { ButtonAddBlog } from '../../components/ButtonAddBlog';
import { Cards } from '../../components/Cards';
import { FormModalBlog } from '../../components/FormModalBlog';
import { api } from '../../api/api';
import { BlogType } from '../../data/@types/Blog';

export default function Blogs(){
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const filterBlog = blogs.filter((blog) => blog.title.toLowerCase().indexOf(search) !== -1);

    function openModal() {
        setIsOpen(!modalIsOpen);
    }

    useEffect(() => {
        api.get("/blog").then(response => {
            setBlogs(response.data);
        })
    }, [blogs]);

    return(
        <>
            <main className={styles.containerBlog}>
                <Header />

                <section className={styles.section}>
                    <div className={styles.wrapper}>
                        <Search
                         onChange={e => setSearch(e.target.value)}
                         value={search}
                        />
                        <ButtonAddBlog onClick={openModal}>
                            + Add blog
                        </ButtonAddBlog>
                    </div>

                <div className={styles.cardContainer}>
                    {filterBlog.map(blog => {
                        return(
                            <Cards
                             key={blog.id}
                             url={blog.url} 
                             title={blog.title} 
                             description={blog.description}
                             href={`${blog.id}`}
                            />
                        );
                    })}
                </div> 
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