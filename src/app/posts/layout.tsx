import React from "react";
import IBaseLayoutProps from "@/app/models/IBaseLayoutProps";

const PostsLayout:React.FC<IBaseLayoutProps> = ({children}) => {
    return <main>{children}</main>
}

export default PostsLayout;