import React, {FC} from 'react';
import IComment from "@/app/models/IComment";
import {fetchDataByIdByEndpoint} from "@/app/services/api.services";

type PropsType = {
    id: string
}
const CommentDetailsComponent: FC<PropsType> = async ({id}) => {
    const comment: IComment = await fetchDataByIdByEndpoint<IComment>("/comments", id)
    return (
        <div>
            <h1>{comment.name}</h1>
            <h6>{comment.email}</h6>
            <p>{comment.body}</p>
        </div>
    );
};

export default CommentDetailsComponent;