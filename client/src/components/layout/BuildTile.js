import React from "react"
import { Link } from "react-router-dom"

const BuildTile = ({ build }) => {

    const { id } = build.id
    return (
        <Link to ={`/builds/${id}`}>
            title: {build.title}
        </Link>
    )
}

export default BuildTile