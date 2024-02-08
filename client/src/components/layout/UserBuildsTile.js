import React from "react"
import { Link } from "react-router-dom"

const UserBuildTile = ({ build }) => {
    const { id } = build

    return (
        <li>
            <Link to={`/builds/${id}`}>
                Title: {build.title}
            </Link>
        </li>
    )
}

export default UserBuildTile