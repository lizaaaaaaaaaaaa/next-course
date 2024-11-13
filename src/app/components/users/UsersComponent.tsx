import React, {FC} from 'react';
import {fetchDataByEndpoint} from "@/app/services/api.services";
import IUser from "@/app/models/IUser";
import {endpoints} from "@/app/constants/urls";
import UserComponent from "@/app/components/users/UserComponent";

const UsersComponent: FC = async () => {
    const users: IUser[] = await fetchDataByEndpoint<IUser>(endpoints.users);
    return (
        <ul>
            {users.map(user => <UserComponent key={user.id} id={user.id} email={user.email}/>)}
        </ul>
    );
};

export default UsersComponent;