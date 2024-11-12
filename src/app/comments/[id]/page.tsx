import React from 'react';
import CommentDetailsComponent from "@/components/comments/CommentDetailsComponent";

type ParamsType = {
    id: string
}
const CommentPage = ({params}: { params: ParamsType }) => {
    return <CommentDetailsComponent id={params.id}/>;
};

export default CommentPage;