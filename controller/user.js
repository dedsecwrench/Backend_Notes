// here we define the function for specific route.

// earlier we used get method directly inside of get method there was a callback function.
// we are defining that callback function here as controller.

// we don't need to import express over here

// defining the controller function which will send response.
const getDetails = (request,response) =>{
    response.send({name:"nameera",age:23});
}

// here we are exporting this getDetails function from controller
module.exports.getDetails = getDetails;