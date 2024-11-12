import React from "react";
import IBaseLayoutProps from "@/app/models/IBaseLayoutProps";

const CommentsLayout: React.FC<IBaseLayoutProps> = ({children}) => {
    return <main>{children}</main>
}

export default CommentsLayout;