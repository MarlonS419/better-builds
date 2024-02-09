import React from "react"
import { Link } from "react-router-dom"

const BuildTile = ({ build }) => {
    const { id } = build

    return (
        <li className="build-tile">
            <Link to={`/builds/${id}`} className="build-link">
                Title: {build.title}
            </Link>
        </li>
    )
}

export default BuildTile