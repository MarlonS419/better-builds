import React from "react";

const DeleteButton = (props) => {
    
    const buildId = (props.dataToDelete)
    const deleteBuild = async () => {
        // event.preventDefault()
        const responseFromDeletion = await fetch(`/api/v1/builds/${buildId}`, {
            method: "DELETE",
            headers: new Headers({ "Content-Type": "application/json" })
        })
        const parsedResponse = await responseFromDeletion.json()
    }

    // useEffect(() => {
    //     getUserData()
    // }, [])

    return (
        <a onClick={deleteBuild}>
            Delete
        </a>
    )
}
export default DeleteButton