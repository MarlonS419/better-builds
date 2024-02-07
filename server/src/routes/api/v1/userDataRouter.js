import express from "express";
import { User } from "../../../models/index.js"

const userDataRouter = new express.Router()

userDataRouter.get("/:id", async (req,res) => {
    const userID = req.params.id
    try {
        const queriedUser = await User.query().findById(userID)
        const userBuildList = await queriedUser.$relatedQuery("builds")
        return res.status(200).json({buildList: userBuildList})
    } catch (error) {
        return res.status(500).json({errors: error})
    }
})

export default userDataRouter