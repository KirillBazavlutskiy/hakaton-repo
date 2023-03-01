import { IPost } from '@/components/OurLastestNews/OurLastestNews';
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

