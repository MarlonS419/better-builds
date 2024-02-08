import React, { useState, useEffect } from "react";
import UserBuildsList from "./UserBuildsList";
import UserReviewsList from "./UserReviewsList"

const UserShow = ({user}) => {

    const [currentUserData, setUserData] = useState({
        userInfo: {},
        buildsList: [],
        reviewsList: []
    })

    const createdAt = new Date(user.createdAt)
    const formattedDate = createdAt.toLocaleDateString()
    const userID = user.id

    const getUserData = async () => {
        try{
            const fetchedUserData = await fetch(`/api/v1/user/${userID}`)
            const parsedUserData = await fetchedUserData.json()
            setUserData(parsedUserData)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <>
            <h1>My Profile</h1>
            <ul>
                <li>Username</li>
                <li>{currentUserData.userInfo.email}</li>
                <li>User since: {formattedDate}</li>
            </ul>
            <h3>My Builds</h3>
            <UserBuildsList buildsList={currentUserData.buildsList}/>
            <h3>My Reviews</h3>
            <UserReviewsList reviewsList={currentUserData.reviewsList} />
        </>
    )
}

export default UserShow