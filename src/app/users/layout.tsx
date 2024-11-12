import React from "react";
import IBaseLayoutProps from "@/app/models/IBaseLayoutProps";

const UsersLayout: React.FC<IBaseLayoutProps> = ({children}) => {
    return<main>{children}</main>
}

export default UsersLayout;