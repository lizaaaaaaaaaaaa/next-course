import React, {FC} from 'react';
import IPost from "@/models/IPost";
import Link from "next/link";

const PostComponent: FC<IPost> = ({title, id}) => {
    return (
        <div>
            <i>title</i>: {title} <span><Link href={`posts/${id}`}>Learn more</Link></span>
        </div>
    );
};

export default PostComponent;