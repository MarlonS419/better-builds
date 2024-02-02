import React from "react"
import { Link } from "react-router-dom"

const BuildTile = ({ build }) => {

    const { id } = build
    return (
        <Link to ={`/builds/${id}`}>
            Title: {build.title}
        </Link>
    )
}

export default BuildTile