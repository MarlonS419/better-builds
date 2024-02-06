import express from "express";
import { Build } from "../../../models/index.js"
import objection from "objection"
import cleanBuildForm from "../../../services/cleanBuildForm.js";
import BuildSerializer from "../../../serializers/BuildSerializer.js";
const { ValidationError } = objection

const buildsRouter = new express.Router()

buildsRouter.post("/", async (req, res) => {
    const currentlyLoggedInUser = req.user
    const buildToAdd = req.body
    buildToAdd.userId = currentlyLoggedInUser.id
    try {
        const cleanedFormData = cleanBuildForm(buildToAdd)
        const insertedBuild = await Build.query().insert(cleanedFormData)
        return res.status(201).json({newBuild: insertedBuild})
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
        return res.status(200).json({ builds: responseFromBuildQuery })
    } catch (error) {
        return res.status(500).json({ error: error })
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