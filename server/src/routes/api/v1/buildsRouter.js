import express from "express";
import { Build } from "../../../models/index.js"

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
    const { id } = req.params
    try{
        const build = Build.query().findById(id)
        // build.users = await build.$relatedQuery("users")
        res.status(200).json({build: build})
    } catch(error) {
        console.log(error)
        res.status(500).json({errors: error})
    }
})

export default buildsRouter