import React from 'react';
import PostDetailsComponent from "@/components/posts/PostDetailsComponent";

type Params = {
    id: string;
};

const PostPage = ({params}: { params: Params }) => {
    return <PostDetailsComponent id={params.id}/>;
};

export default PostPage;