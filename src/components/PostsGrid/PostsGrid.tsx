import { IPost } from '@/models/data';
import { Post } from './Post/Post';
import s from './PostsGrid.module.css';

interface PostsGridProps {
    posts: IPost[]
}

export function PostsGrid({ posts }: PostsGridProps): JSX.Element {
    return (
        <div className={s.grid}>
            {posts && posts.map((responce:IPost, number:number) => {
                if(number < 3) {
                    return (
                        <Post
                            id={responce.id}
                            username={responce.username}
                            timestamp={responce.timestamp}
                            caption={responce.caption}
                            media_type={responce.media_type}
                            media_url={responce.media_url}
                            children={responce.children}
                            permalink={responce.permalink}
                            key={responce.id}
                        />
                    );
                }
            })}
        </div>
    );
}