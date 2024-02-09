import express from "express";
import { Build, Review } from "../../../models/index.js"
import objection from "objection"
const { ValidationError } = objection
import cleanBuildForm from "../../../services/cleanBuildForm.js";

const buildsReviewsRouter = new express.Router({mergeParams: true})

buildsReviewsRouter.post("/", async (req, res) => {
    const currentlyLoggedInUser = req.user
    const submittedReview = req.body

    submittedReview.buildId = req.params.id
    submittedReview.userId = currentlyLoggedInUser.id

    try {
        const cleanedFormData = cleanBuildForm(submittedReview)
        const reviewToAdd = await Review.query().insert(cleanedFormData)
        return res.status(201).json({ reviewToAdd })
    } catch (error) {
        if (error instanceof ValidationError){
            return res.status(422).json({ errors: error.data })
        }
        return res.status(500).json({ errors: error.message })
    }
})

export default buildsReviewsRouter