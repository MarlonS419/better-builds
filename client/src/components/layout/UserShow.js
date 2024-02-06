import React, { useState, useEffect } from "react";
import UserBuildList from "./UserBuildList";
import UserSerializer from "../../../../server/src/serializers/UserSerializer";

const UserShow = ({user}) => {
    const userInfo = UserSerializer.serializeUser(user)
    console.log(userInfo)
    const createdAt = new Date(userInfo.createdAt)
    const formattedDate = createdAt.toLocaleDateString()
    return (
        <>
            <h1>My profile</h1>
            <ul>
                <li>username</li>
                <li>{userInfo.email}</li>
                <li>User since: {formattedDate}</li>
            </ul>
            <UserBuildList user={userInfo}/>
        </>
    )
}

export default UserShow