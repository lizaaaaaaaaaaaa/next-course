import React from "react";
import IBaseLayoutProps from "@/models/IBaseLayoutProps";

const PostsLayout:React.FC<IBaseLayoutProps> = ({children}) => {
    return <main>{children}</main>
}

export default PostsLayout;