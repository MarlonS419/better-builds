import React from "react"
import { Link } from "react-router-dom"

const BuildTile = ({ build }) => {



    const { id } = build
    const { userId } = build

    return (
        <li>
            <Link to={`/builds/${id}`}>
                Title: {build.title}
            </Link>
        </li>
    )
}

export default BuildTile