import { IPost } from '@/models/data';
import { Post } from './Post/Post';
import s from './PostsGrid.module.css';

interface PostsGridProps {
    posts: IPost[]
}

export function PostsGrid({ posts }: PostsGridProps): JSX.Element {
    return (
        <div className={s.grid}>
            {posts && posts.map((p, i) => {
                if(i < 3) {
                    return (
                        <Post
                            id={p.id}
                            username={p.username}
                            timestamp={p.timestamp}
                            caption={p.caption}
                            media_type={p.media_type}
                            media_url={p.media_url}
                            children={p.children}
                            permalink={p.permalink}
                            key={p.id}
                        />
                    );
                }
            })}
        </div>
    );
}