import React from "react";

const DeleteButton = ({currentUserData, dataToDelete, setUserData}) => {
    
    const buildId = dataToDelete
    const deleteBuild = async () => {
        const responseFromDeletion = await fetch(`/api/v1/builds/${buildId}`, {
            method: "DELETE",
            headers: new Headers({ "Content-Type": "application/json" })
        })
        const parsedResponse = await responseFromDeletion.json()
        console.log("Parsed Response: ", parsedResponse)
        if(parsedResponse.deleted){
            const newBuildList = parsedResponse.newBuildList
            setUserData({...currentUserData, buildsList: newBuildList})
        }
    }

    return (
        <a onClick={deleteBuild}>
            Delete
        </a>
    )
}
export default DeleteButton