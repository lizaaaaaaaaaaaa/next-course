import React, {FC} from 'react';
import IComment from "@/app/models/IComment";
import {fetchDataByEndpoint} from "@/app/services/api.services";
import CommentComponent from "@/app/components/comments/CommentComponent";

const CommentsComponent: FC = async () => {
    const comments: IComment[] = await fetchDataByEndpoint<IComment>("/comments");
    return (
        <ul>
            {comments.map(comment => <CommentComponent key={comment.id} id={comment.id} postId={comment.postId}
                                                       name={comment.name} email={comment.email} body={comment.body}/>)}
        </ul>
    );
};

export default CommentsComponent;