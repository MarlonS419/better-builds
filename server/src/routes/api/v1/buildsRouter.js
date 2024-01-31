import express from "express";
import { Build } from "../../../models/index.js"

const buildsRouter = new express.Router()

buildsRouter.get("/", async (req, res) => {
    console.log("backend GET requested")
    try {
        const responseFromBuildQuery = await Build.query()
        return res.status(200).json({builds: responseFromBuildQuery})
    } catch (error) {
        return res.status(500).json({error: error})
    }
})

export default buildsRouter