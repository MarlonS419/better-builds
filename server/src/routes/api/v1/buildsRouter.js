import express from "express";
import { Build, Review } from "../../../models/index.js"
import BuildSerializer from "../../../serializers/BuildSerializer.js";
import objection from "objection"
const { ValidationError } = objection

const buildsRouter = new express.Router()

// MOVE TO BUILD REVIEWS ROUTER
buildsRouter.post("/:id", async (req, res) => {
    const currentlyLoggedInUser = req.user
    const reviewToAdd = req.body
    reviewToAdd.userId = currentlyLoggedInUser.id
    try {
        await Review.query().insert(reviewToAdd)
        return res.status(201).json({ reviewToAdd })
    } catch (error) {
        if(error instanceof ValidationError){
            return res.status(422).json({errors: error.data})
        }
        return res.status(500).json({ errors: error.message })
    }
})

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