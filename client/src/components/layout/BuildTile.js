import React from "react"

const BuildTile = (props) => {
    const build = props.build
    return(
        <div>
            <a href="#">Title: {build.title}</a>
        </div>
    )
}

export default BuildTile