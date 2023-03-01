import { useState, useEffect } from 'react';

import { SectionCaption } from '../SectionCaption/SectionCaption';
import Instagram from '../instagram'

import s from "./OurLatestNews.module.scss";
import { GetStaticProps } from 'next/types';

export interface IPost {
    id: string,
    username: string,
    caption: string,
    media_type: string,
    media_url: string,
    timestamp: string,
    permalink: string,
    children: Children
}

interface Children {
    data: Child[]
}

interface Child {
    id: string,
    media_url: string,
}

const OurLastestNews = ({ key }: any) => {
    const [state, setState] = useState<IPost[]>();
    console.log(key);

    const getData = async () => {
        const url = `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,children{media_url,thumbnail_url},timestamp,permalink&access_token=${key}`;
        const data = await fetch(url);
        return await data.json();
    }

    useEffect(() => {
        getData()
            .then(res => {
                setState(res.data);
            })
            .catch(() => {
                console.log('err');
            });
    }, []);

    return (
        <>
            {
                state &&
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <SectionCaption>
                            Our Lastest news
                        </SectionCaption>
                        <div className={s.posts}>
                            <Instagram posts={state} />
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const token = await process.env.REACT_APP_INSTAGRAM_KEY;
    return { props: { key: token } }
}

export default OurLastestNews;