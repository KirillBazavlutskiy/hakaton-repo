import { IPost } from '@/pages';
import { PostsGrid } from './PostsGrid/PostsGrid';

interface InstagramProps {
    posts: IPost[]
}

export default function Instagram ({ posts}: InstagramProps ) {
    
    return (
        <div>
            <PostsGrid posts={posts} />
        </div>
    );
};

