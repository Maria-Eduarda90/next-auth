import Link from 'next/link';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { BlogType } from '../../data/@types/Blog';
import { TextUtils } from '../../utils/TextUtils';
import styles from './styles.module.scss';

export function Cards(){
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const maximumTextSize = 200;

    useEffect(() => {
        api.get("/blog").then(response => {
            setBlogs(response.data);
        })
    }, [blogs])

    return(
        <div className={styles.cardContainer}>
            {blogs.map(blog => {
                return(
                    <div className={styles.card} key={blog.id}>
                        <img src={blog.url} alt="" />

                        <div>
                            <h1>{blog.title}</h1>
                            <p>
                                {TextUtils.limitText(`${blog.description}`, maximumTextSize)}
                            </p>

                            <Link href="#">
                                Ver mais+
                            </Link>
                        </div>
                    </div> 
                );
            })}   
        </div>
    );
}