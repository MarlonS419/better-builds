import React from "react"
import { Link } from "react-router-dom"

const EditBuildButton = ({ dataToEdit, currentUserData, setUserData }) => {
    return (
        <Link to={`/builds/edit/${dataToEdit}`}>
            Edit Build
        </Link>
    )
}

export default EditBuildButton