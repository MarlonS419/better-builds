import express from "express";
import { User } from "../../../models/index.js"
import UserSerializer from "../../../serializers/UserSerializer.js"
import BuildSerializer from "../../../serializers/BuildSerializer.js"
import ReviewSerializer from "../../../serializers/ReviewSerializer.js";

const userDataRouter = new express.Router()

userDataRouter.get("/:id", async (req,res) => {
    const userID = req.params.id
    try {
        const queriedUser = await User.query().findById(userID)
        const serializedUser = UserSerializer.serializeUser(queriedUser)
        const userBuildsList = await queriedUser.$relatedQuery("builds")
        const serializedBuildData = await Promise.all(userBuildsList.map((build) => {
            return BuildSerializer.getBuildDetails(build)
        }))
        const userReviewsList = await queriedUser.$relatedQuery("reviews")
        const serializedReviewsData = ReviewSerializer.getReviewDetails(userReviewsList)
        return res.status(200).json({
            userInfo: serializedUser,
            buildsList: serializedBuildData, 
            reviewsList: serializedReviewsData
        })
    } catch (error) {
        return res.status(500).json({errors: error})
    }
})

export default userDataRouter