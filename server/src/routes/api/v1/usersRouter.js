import express from "express";
import { ValidationError } from "objection";

import { User } from "../../../models/index.js";

const usersRouter = new express.Router();


usersRouter.get("/profile", async (req, res) => {
  const userId = req.user.id
  console.log("usersRouter", req.user)
  try {
    const selectedUser = await User.query().findById(userId) 
    return res.status(200).json({selectedUser})
  } catch(error) {
    return res.status(500).json({errors: err})
  }
})

// usersRouter.get("/:userId", async (req, res) => {
//   const userId = req.params.userId
//   try {
//     const selectedUser = User.query().findById(userId)
//     res.status(200).json({selectedUser})
//   } catch(error) {
//     res.status(500).json({errors: error})
//   }
// })

usersRouter.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({ email, password });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    console.log(error)
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ error: error.message });
  }
});

export default usersRouter;