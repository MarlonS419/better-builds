import express from "express";
import { Build, Review } from "../../../models/index.js"
import BuildSerializer from "../../../serializers/BuildSerializer.js";
import objection from "objection"
const { ValidationError } = objection

const buildsReviewsRouter = new express.Router({mergeParams: true})

// MOVE TO BUILD REVIEWS ROUTER
buildsReviewsRouter.post("/", async (req, res) => {
    const { body } = req
    const formInput = cleanUserInput(body)
    const { rating, comment } = formInput

    const buildId = req.params.id
    
    const currentlyLoggedInUser = req.user
    const submittedReview = req.body
    submittedReview.userId = currentlyLoggedInUser.id

    try {
        const reviewToAdd = await Review.query().insert({ rating, comment, buildId, userId })
        return res.status(201).json({ reviewToAdd })
    } catch (error) {
        if(error instanceof ValidationError){
            return res.status(422).json({errors: error.data})
        }
        return res.status(500).json({ errors: error.message })
    }
})

export default buildsReviewsRouter