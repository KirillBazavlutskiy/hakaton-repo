import s from "./OurLatestNews.module.scss";
import Instagram from '../instagram'
import { IPost } from '@/pages';

interface OurLastestNewsProps {
    posts: IPost[]
}

const OurLastestNews = ({ posts }: OurLastestNewsProps) => {
    return (
        <div className={s.container}>
            <h1>Our Lastest news</h1>
            <div className={s.posts}>
                <Instagram posts={posts} />
            </div>
        </div>
    );
};

export default OurLastestNews;