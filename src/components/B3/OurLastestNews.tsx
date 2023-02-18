import s from "./OurLatestNews.module.scss";
import Instagram from '../instagram'

const OurLastestNews = () => {
    return (
        <div className={s.container}>
            <h1>Our Lastest news</h1>
            <div className={s.posts}>
                <Instagram/>
            </div>
        </div>
    );
};

export default OurLastestNews;