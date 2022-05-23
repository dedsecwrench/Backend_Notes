const express = require("express");

// importing Router module from express
const combinedRouter = express.Router();
             // express.Router() is a module which allows you to create child routes or end points or APIs.   

// importing user Route from routes
const userRouter = require("./user");

// over here your using router module which you imported.
// setting userRouter on "/user" path
combinedRouter.use("/user", userRouter);
// router.use("/employee", employeeRouter);

// .use function basically helps you to do this thing as many child routes your having 
// those many child routes you can append over here.
// whenever you're adding all the child routes in combine.js file remember you will be using .use function

// exporting router which we combined
module.exports = combinedRouter;

