import express from "express";
import { Build } from "../../../models/index.js"
import objection from "objection"
const { ValidationError } = objection

const buildsRouter = new express.Router()

buildsRouter.post("/new", async (req, res) => {
    // console.log("Form Sent in By: ", req.user)
    const currentlyLoggedInUser = req.user
    // console.log("form data:", req.body)
    const buildToAdd = req.body
    buildToAdd.userId = currentlyLoggedInUser.id
    console.log("Data to insert into:", buildToAdd)
    try {
        await Build.query().insert(buildToAdd)
        return res.status(201).json({})
    } catch (error) {
        console.log(error)
        if (error instanceof ValidationError) {
        return res.status(422).json({ errors: error.data })
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

export default buildsRouter