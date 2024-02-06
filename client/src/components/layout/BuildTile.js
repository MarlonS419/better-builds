import React from "react"
import { Link } from "react-router-dom"

const BuildTile = ({ build }) => {

    const { id } = build
    return (
        <li key={build.id}>
            <Link to ={`/builds/${id}`}>
                Title: {build.title}
            </Link>
        </li>
    )
}

export default BuildTile