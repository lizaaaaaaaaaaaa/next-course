import React, {FC} from 'react';
import {fetchDataByEndpoint} from "@/services/api.services";
import IUser from "@/models/IUser";
import {endpoints} from "@/constants/urls";
import UserComponent from "@/components/users/UserComponent";

const UsersComponent: FC = async () => {
    const users: IUser[] = await fetchDataByEndpoint<IUser>(endpoints.users);
    return (
        <ul>
            {users.map(user => <UserComponent key={user.id} id={user.id} email={user.email}/>)}
        </ul>
    );
};

export default UsersComponent;