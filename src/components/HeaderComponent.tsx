import React, {FC} from 'react';
import Link from "next/link";

const HeaderComponent:FC = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link href={"/users"}>Users</Link>
                </li>
                <li>
                    <Link href={"/comments"}>Comments</Link>
                </li>
                <li>
                    <Link href={"/posts"}>Posts</Link>
                </li>
            </ul>
        </header>
    );
};

export default HeaderComponent;