import Link from 'next/link';

import { TextUtils } from '../../utils/TextUtils';
import styles from './styles.module.scss';

export type CardsType = {
    url: string;
    title: string;
    description: string;
    href: string;
}

export function Cards({ url, title, description, href }: CardsType){
    const maximumTextSize = 200;
    return(
        <div className={styles.card}>
            <img src={url} alt="" />

            <div>
                <h1>{title}</h1>
                <p>
                    {TextUtils.limitText(`${description}`, maximumTextSize)}
                </p>

                <Link href={href}>
                    Ver mais+
                </Link>
            </div>
        </div>     
    );
}