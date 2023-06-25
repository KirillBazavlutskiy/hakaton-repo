import { SectionCaption } from '../SectionCaption/SectionCaption';
import { PostsGrid } from '../PostsGrid/PostsGrid';


import s from "./OurLatestNews.module.scss";

const OurLastestNews = (props: any) => {
    // console.log(props.instagramData)
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <SectionCaption>
                    Our Lastest news
                </SectionCaption>
                <div className={s.posts}>
                    <PostsGrid posts={props.instagramData.data} />
                </div>
            </div>
        </div>
    );
};

export default OurLastestNews;