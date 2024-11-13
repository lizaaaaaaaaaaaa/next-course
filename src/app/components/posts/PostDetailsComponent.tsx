import React, {FC} from 'react';
import IPost from "@/app/models/IPost";
import {fetchDataByIdByEndpoint} from "@/app/services/api.services";

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