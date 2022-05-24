const express = require("express");
const cors = require("cors");
const server = express()


// ---------------------------------------------- 6April ----------------------------------------------------

// importing http module
// const http = require("http");

// createed single server using http module.

// http.createServer((req,res)=>{
//     res.write("hello world");
//     res.write(JSON.stringify({id:1,name:"john"}));
//     res.end();
// }).listen(8000);


// ---------------------------------------------- 6April ----------------------------------------------------


// const middleware = (request,response,next) =>{
//     console.log("MIDDLEWARE 1");
//     next();
// }

// const middleware2 = (request,response,next) =>{
//     console.log("MIDDLEWARE 2");
//     next();
// }

// server.use(middleware);
// server.use(middleware2);

// server.get("/",(request,response)=>{
//     response.send("server is running");
// })  

// server.get("/user",middleware2,(request,response)=>{
//     response.send({username: "abc",id:1});
// })  

// server.listen(3000,()=>console.log("> Host url : http://localhost:3000"));



// ---------------------------------------------- 7April ----------------------------------------------------


// server.get("/",(req,res)=>{
//     res.send("success")
// })

// server.post("/addUser",(req,res)=>{
//     res.send(req.query)
//     console.log(req.query);
//     res.send(req.query)
//     res.send("success")
// })

// server.put("/editUser/:id",(req,res)=>{
//     res.send(req.query)
//     console.log(req.params);
//     res.send("success")
// })

// server.listen(8000,()=>{
//     console.log("> Host URL : http://localhost:8000")
// })



// ---------------------------------------------- 8April ----------------------------------------------------


// Enable cors
// server.use(cors());

// server.get("/",(req,res)=>{
//     res.send("success")
// })

// server.post("/addUser",(req,res)=>{
//     res.send(req.query)
//     console.log(req.query);
//     res.send(req.query)
//     res.send("success")
// })

// server.put("/editUser/:id",(req,res)=>{
//     res.send(req.query)
//     console.log(req.params);
//     res.send("success")
// })

// server.listen(8000,()=>{
//     console.log("> Host URL : http://localhost:8000")
// })


// ---------------------------------------------- 12April ----------------------------------------------------

// importing combine.js as mainRouter from routes
const mainRouter = require("./routes/combine.js");

server.use(cors());

server.use("/api/v1", mainRouter);

server.listen(process.env.PORT || 8000,()=>{
    console.log("> Host URL : http://localhost:8000/api/v1")
})


// ---------------------------------------------- 19April ----------------------------------------------------
