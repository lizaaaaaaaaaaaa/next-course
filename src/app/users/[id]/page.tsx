import React from 'react';
import UserDetailsComponent from "@/components/users/UserDetailsComponent";

type ParamsType = {
    id: string
}
const UserPage = ({params}: { params: ParamsType }) => {
    return <UserDetailsComponent id={params.id}/>;
};

export default UserPage;