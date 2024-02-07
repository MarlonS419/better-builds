import React from "react";


const UserReviewsList = (props) => {
    console.log(props.user)
    const currentUser = props.user
    const userID = currentUser.id
    try{
        
    } catch(error){
        console.error(error)
    }
    return (
        <h1>Hi from user reviews!</h1>
    )

}

export default UserReviewsList