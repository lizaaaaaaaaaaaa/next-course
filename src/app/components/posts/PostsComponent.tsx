import React, {FC} from 'react';
import IPost from "@/app/models/IPost";
import {fetchDataByEndpoint} from "@/app/services/api.services";
import PostComponent from "@/app/components/posts/PostComponent";

const PostsComponent: FC = async () => {
    const posts: IPost[] = await fetchDataByEndpoint<IPost>("/posts");
    return (
        <ul>
            {posts.map(post => <PostComponent key={post.id} userId={post.userId} id={post.id} title={post.title}
                                              body={post.body}/>)}
        </ul>
    );
};

export default PostsComponent;