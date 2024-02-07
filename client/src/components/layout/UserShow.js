import React, { useState, useEffect } from "react";
import UserSerializer from "../../../../server/src/serializers/UserSerializer";
import BuildsList from "./BuildsList";
import ReviewsList from "./ReviewsList"

const UserShow = ({user}) => {
    
    const [currentUserData, setUserData] = useState({
        buildsList: [],
        reviewsList: []
    })

    const userInfo = UserSerializer.serializeUser(user)
    const createdAt = new Date(userInfo.createdAt)
    const formattedDate = createdAt.toLocaleDateString()
    const userID = userInfo.id

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
            <h1>My profile</h1>
            <ul>
                <li>username</li>
                <li>{userInfo.email}</li>
                <li>User since: {formattedDate}</li>
            </ul>
            <h3>My Builds</h3>
            <BuildsList onProfilePage={true} buildsList={currentUserData.buildsList}/>
            <h3>My Reviews</h3>
            <ReviewsList onProfilePage={true} reviews={currentUserData.reviewsList} />
        </>
    )
}

export default UserShow