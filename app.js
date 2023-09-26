const express = require("express");

//call the express server
const app = express();

//require the student schema
const Student = require("./models/students");

// require the student Router file
const studentRouter = require("./router/studentRouter")

//assign the port number
const port = process.env.PORT || 3000;

//connection with database mongodb with require it
require("./db/conn");

// due to get undifined result from the post request , thats why we use :- express.json with app.use method
app.use(express.json()); 
app.use(studentRouter)
// the we have to listen the post resquest from he listen function
app.listen(port, () => {
  console.log("Successfull 🚀");
});
