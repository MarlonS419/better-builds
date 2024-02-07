import React from "react"
import BuildShow from "./BuildShow"

const DeleteButton = (props) => {
    const buildId = (props.dataToDelete)
    const deleteBuild = async () => {
        const responseFromDeletion = await fetch(`/api/v1/builds/${buildId}`, {
            method: "DELETE",
            headers: new Headers({ "Content-Type": "application/json" })
        })
        const parsedResponse = await responseFromDeletion.json()
    }
    return (
        <a onClick={deleteBuild}>
            Delete
        </a>
    )
}
export default DeleteButton