// this is the specific router which we are creating
const express = require("express");

// imported router as userRouter
// created specific router
const userRouter = express.Router();

// importing user controller file
const userController = require("../controller/user")

// userRouter 
userRouter.route("/")   
          .get(userController.getDetails) // we can use all http methods over here for userRouter.
          .post(userController.postDetails)
          // such as  .post()  or  .put()  or  .delete

// exporting userRouter          
module.exports = userRouter;
