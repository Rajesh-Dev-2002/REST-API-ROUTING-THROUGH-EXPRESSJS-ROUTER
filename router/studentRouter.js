const express = require("express");

const router = new express.Router();

// import the Student collection from model file

const Student = require("../models/students")

// //then we have to create the student routeri, so that we have use the , POST request.
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   //now we have to save this data into the database , thats why we call this fuction is :- save
//   user.save().then(()=>{
//     res.status(201).send(user)
//   }).catch((e)=>{
//     res.status(400).send(e);
//   })
// });


//here we can easily use the async function as well:-

router.post("/students",async(req,res)=>{
 
    try {
    //get the input data from the body
    const user = new Student(req.body);
    //save the data into the database , thats why we use
     const createUser=await user.save()
     res.status(201).send(createUser);
    } catch (e) {
      res.status(400).send(e);
    }
  
  })
  
  // to get the data from the database , thats why we use get method thats acts as like read the data, from db;
  router.get("/students",  async(req,res)=>{
    try {
     const findData= await Student.find();
      res.status(201).send(findData);
    } catch (e) {
      res.status(401).send(e)
    }
  })
  
  
  //to get the indivisual data from the students using ID
  
  router.get("/students/:id",async(req,res)=>{
         try {
          const _id = req.params.id;
          const findOneData= await Student.findById(_id);
          if(!findOneData){
            res.status(404).send();
          }
          else{
            res.send(findOneData)
          }
           
         } catch (e) {
          res.send(e)
         }
  })
  
  //delete the data from existing documents by find id and delete that documents.
  
  router.delete("/students/:id",async(req,res)=>{
    try {
      const Delete = req.params.id;
      const findAndDelete = await Student.findByIdAndDelete(Delete)
      if(!findAndDelete){
        res.status(404).send();
      }
      else{
        res.status(201).send(findAndDelete)
      }
      
    } catch (e) {
      res.status(404).send(e);
      
    }
  })
  
  // Update and delete the data which is existing already by using :- FindByIdandupdate
  
  router.patch("/students/:id",async(req,res)=>{
    try {
      const _id = req.params.id;
      const PathcedData= await Student.findByIdAndUpdate(_id, req.body);
      if(!PathcedData){
        res.status(404).send();
      }
      else{
        res.status(201).send(PathcedData)
      }
    } catch (e) {
      res.status(404).send(e)
    }
  })
  

module.exports= router;




