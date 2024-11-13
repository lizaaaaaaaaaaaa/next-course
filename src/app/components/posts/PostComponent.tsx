import React, {FC} from 'react';
import Link from "next/link";
import IPost from "@/app/models/IPost";

const PostComponent: FC<IPost> = ({title, id}) => {
    return (
        <div>
            <i>title</i>: {title} <span><Link href={`posts/${id}`}>Learn more</Link></span>
        </div>
    );
};

export default PostComponent;