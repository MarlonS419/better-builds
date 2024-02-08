import React from "react"
import { Link } from "react-router-dom"

const UserBuildTile = ({ build }) => {
    const { id, title } = build

    return (
        <Link to={`/builds/${id}`}>
            Title: {title}
        </Link>
    )
}

export default UserBuildTile