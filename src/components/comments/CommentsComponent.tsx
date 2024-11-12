import React, {FC} from 'react';
import {fetchDataByEndpoint} from "@/services/api.services";
import IComment from "@/models/IComment";
import CommentComponent from "@/components/comments/CommentComponent";

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