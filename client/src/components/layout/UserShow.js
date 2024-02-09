import React, { useState, useEffect } from "react";
import UserBuildsList from "./UserBuildsList";
import UserReviewsList from "./UserReviewsList"

const UserShow = ({ user }) => {
    const [currentUserData, setUserData] = useState({
        builds: [],
        reviews: []
    })

    const createdAt = new Date(user.createdAt)
    const formattedDate = createdAt.toLocaleDateString()
    const userID = user.id

    const getUserData = async () => {
        try {
            const fetchedUserData = await fetch(`/api/v1/user/${userID}`)
            const parsedUserData = await fetchedUserData.json()
            setUserData(parsedUserData.user)
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
                <li>Email: {user.email}</li>
                <li>User since: {formattedDate}</li>
            </ul>
            <h3>My Builds</h3>
            <UserBuildsList buildsList={currentUserData.builds} currentUserData={currentUserData} setUserData={setUserData}/>
            <h3>My Reviews</h3>
            <UserReviewsList reviewsList={currentUserData.reviews} currentUserData={currentUserData} setUserData={setUserData}/>
        </>
    )
}

export default UserShow