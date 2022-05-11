const http = require("http");

http.createServer((req,res)=>{
    res.write("hello world");
    res.write(JSON.stringify({id:1,name:"john"}));
    res.end();
}).listen(8000);
