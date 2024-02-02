import express from "express";
import { Build, Review } from "../../../models/index.js"
import BuildSerializer from "../../../serializers/BuildSerializer.js";
import objection from "objection"
const { ValidationError } = objection

const reviewRouter = new express.Router()

// MOVE TO BUILD REVIEWS ROUTER
reviewRouter.post("/", async (req, res) => {
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

export default reviewRouter