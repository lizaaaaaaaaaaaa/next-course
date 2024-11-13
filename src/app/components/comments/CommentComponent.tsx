import React, {FC} from 'react';
import Link from "next/link";
import IComment from "@/app/models/IComment";

const CommentComponent: FC<IComment> = ({id, name}) => {
    return (
        <li>
            <i>name</i>: {name} <span><Link href={`/comments/${id}`}>Learn more</Link></span>
        </li>
    );
};

export default CommentComponent;