# What is Frontend and Backend ?

    Frontend development =>
    Basically whatever the user looking at on website, that is the frontend side of web application.
    developing UI
    UI = User Interface is anything a user interacts with on a website, application, or any digital device.
    Frontend consist of 1 thing only i.e React project directory. 

    Backend Development =>
    whatever data user interacts with on frontend side will store in backend.
    Backend application consist of 2 things i.e :-
    first thing is database and another thing is backend proper application or the folder structure that you're having.

    frontend application will be created separately and backend application will also be created separately
    both in separate folder.
    because frontend application itself is a very big thing.

Note => ***you can create frontend and backend in same folder if you are creating a website of your own***
        ***else create frontend and backend in different folder***

# What is the responsbility of backend Application ?

    Backend responsbility or only job is that whenever or whatsoever data your frontend application is asking for,
    go to the database,
    fetch that specific data
    and then send it back to the frontend application.
    
    first application is your React application
    another application is your database
    Backend application connects these 2 applications.

    whenever 2 different application running on different ports or different locations.
    so their is 1 thing if you want to access data from one application to another their is something which is known as API

 ***Always Remember this thing***
 
    So Whenever you're developing the Backend application that means you're developing the API.
    
    API = Application Programming Interface

# How many API's can have in one Backend application ?

    Uncountable
    It can have as many as API's we can create over their.

    So when you're having a lots and lots of API's and 
    then you collect all those API's and
    then you keep it at 1 single folder,
    So that complete folder will be known as your Backend Project.

    All the API's when get combined together at a single place,
    that complete folder structure will be known as the Backend project.

# npm init --y

this is the command for creating package.json file

# inside package.json => script section add property =>

       "start":"node index.js"
***(index.js) File in which you created your server***     

# http module

    "http" Mpdule is the in-build module in the JavaScript. 
     so if you want to create API or If you want to create Applications
     you can use the "http" module.

    so whenever any single API gets created,
    that time or most of the time we will be using the "http" module only. 

    so for the single API we don't have to install the libraries, or other frameworks etc,
    so if you want to create the single API, so better go with the "http" module only.

        const http = require("http");

# createServer using http module

whatever server you created should listen to a port number given by you

http.createServer((request,response)=>{

         *** Request here ***    
                 OR 
         *** Response here ***
    response.write("hello world");

   Note => ***if you make changes inside your server you have to restart your server by npm start***

}).listen(8000)  ***you can change port number if you want, whatever you wanna give***
       In this 8000 is the port-number

# command to start the server you created

    npm start

# Request and Response in Node

Request and Response object both are the callback function parameters and are used for Express. js and Node. js.

The res object represents the HTTP response that an Express app sends when it gets an HTTP request.

# Express

when you're having lots and lots of API's and you need to maintain those API's inside a folder structure,
then you need something which is known as Framework.

 => What is that Backend framework you used to create in the backend development ?
 
 ***That is EXPRESS***
