import React from "react";

const DeleteBuildButton = ({ currentUserData, dataToDelete, setUserData }) => {
    const buildId = dataToDelete

    const deleteBuild = async () => {
        const responseFromDeletion = await fetch(`/api/v1/builds/${buildId}`, {
            method: "DELETE",
            headers: new Headers({ "Content-Type": "application/json" })
        })
        const parsedResponse = await responseFromDeletion.json()
        if (parsedResponse.deleted) {
            const newBuildList = parsedResponse.newBuildList
            setUserData({ ...currentUserData, builds: newBuildList })
        }
    }

    return (
        <button className="button" onClick={deleteBuild}>
            Delete
        </button>
    )
}
export default DeleteBuildButton