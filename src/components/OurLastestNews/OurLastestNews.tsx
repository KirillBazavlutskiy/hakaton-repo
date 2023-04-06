import { FC } from 'react';

import { SectionCaption } from '../SectionCaption/SectionCaption';
import { PostsGrid } from '../PostsGrid/PostsGrid';
import { OurLatestNews } from '@/models/text';

import s from "./OurLatestNews.module.scss";
import { IPost } from '@/models/data';

interface OurLastestNewsProps {
    caption: OurLatestNews;
    instagramData: IPost[];
}

const OurLastestNews: FC<OurLastestNewsProps> = ({caption, instagramData}) => {
    
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    {caption}
                </SectionCaption>
                <div className={s.posts}>
                    <PostsGrid posts={instagramData} />
                </div>
            </div>
        </div>
    );
};

export default OurLastestNews;