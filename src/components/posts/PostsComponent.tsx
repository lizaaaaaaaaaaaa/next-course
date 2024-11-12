import React, {FC} from 'react';
import {fetchDataByEndpoint} from "@/services/api.services";
import IPost from "@/models/IPost";
import PostComponent from "@/components/posts/PostComponent";

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