import React, { useState, useEffect } from "react";

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
            <UserBuildsList user={user}/>
        </>
    )
}

export default UserShow