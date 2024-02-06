import React, { useState, useEffect } from "react";
import UserBuildList from "./UserBuildList";

const UserShow = ({user}) => {
    const createdAt = new Date(user.createdAt)
    return (
        <>
            <h1>My profile</h1>
            <ul>
                <li>username</li>
                <li>{user.email}</li>
                <li>User since: {createdAt.toLocaleDateString()}</li>
            </ul>
            <UserBuildList user={user}/>
        </>
    )
}

export default UserShow