import express from "express";
import { Build } from "../../../models/index.js"
import BuildSerializer from "../../../serializers/BuildSerializer.js";

const buildsRouter = new express.Router()

buildsRouter.get("/", async (req, res) => {
    try {
        const responseFromBuildQuery = await Build.query()
        return res.status(200).json({builds: responseFromBuildQuery})
    } catch (error) {
        return res.status(500).json({error: error})
    }
})

buildsRouter.get("/:id", async (req, res) => {
    const id  = req.params.id
    try{
        const selectedBuild = await Build.query().findById(id)
        const serializedBuild = BuildSerializer.getBuildDetails(selectedBuild)
        res.status(200).json({ selectedBuild: serializedBuild })
    } catch(error) {
        res.status(500).json({errors: error})
    }
})

export default buildsRouter