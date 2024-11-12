import React from "react";
import IBaseLayoutProps from "@/models/IBaseLayoutProps";

const CommentsLayout: React.FC<IBaseLayoutProps> = ({children}) => {
    return <main>{children}</main>
}

export default CommentsLayout;