import React, {FC} from 'react';
import IUser from "@/app/models/IUser";
import {fetchDataByIdByEndpoint} from "@/app/services/api.services";

type PropsType = {
    id: string
}
const UserDetailsComponent: FC<PropsType> = async ({id}) => {
    const user: IUser = await fetchDataByIdByEndpoint<IUser>("/users", id);
    return (
        <div>
            <h1>{user.name}</h1>
            <h3>{user.username}</h3>
            <h6>{user.email}</h6>
        </div>
    );
};

export default UserDetailsComponent;