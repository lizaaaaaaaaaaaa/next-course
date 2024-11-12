import React from "react";
import IBaseLayoutProps from "@/models/IBaseLayoutProps";

const UsersLayout: React.FC<IBaseLayoutProps> = ({children}) => {
    return<main>{children}</main>
}

export default UsersLayout;