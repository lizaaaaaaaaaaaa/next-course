import React, {FC} from 'react';
import Link from "next/link";

type PropsType = {
    id: number,
    email: string
}

const UserComponent: FC<PropsType> = ({id, email}) => {
    return (
        <li>
            <i>email</i>: {email} <span><Link href={`/users/${id}`}>Learn more</Link></span>
        </li>
    );
};

export default UserComponent;