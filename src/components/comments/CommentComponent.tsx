import React, {FC} from 'react';
import IComment from "@/models/IComment";
import Link from "next/link";

const CommentComponent: FC<IComment> = ({id, name}) => {
    return (
        <li>
            <i>name</i>: {name} <span><Link href={`/comments/${id}`}>Learn more</Link></span>
        </li>
    );
};

export default CommentComponent;