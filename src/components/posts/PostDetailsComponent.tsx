import React, {FC} from 'react';
import {fetchDataByIdByEndpoint} from "@/services/api.services";
import IPost from "@/models/IPost";

type PropsType ={
    id: string
}
const PostDetailsComponent: FC<PropsType> = async ({id}) => {
    const post:IPost = await fetchDataByIdByEndpoint<IPost>("/posts", id)
    return (
        <div>
            <h1>{post.title}</h1>
            <h5>{post.userId}</h5>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetailsComponent;