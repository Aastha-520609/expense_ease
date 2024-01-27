const express = require("express");
//import express from "express";
const app = express();
const port = 3000;

app.use(express.json());

//creating a schema
let students = [
    { uid: 1, sem1: 1, sem2: 2, cgpa: 8.75 },
    {uid: 2, sem1: 2, sem2: 3, cgpa: 7.75}
  ];

//get
app.get("/students", (req,res) => {
    res.json(students);
});

// post
app.post("/students", (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({ message: 'Post done successful', student: newStudent });
  });

//put
app.put('/students/:uid', (req, res) => {
    const uid = parseInt(req.params.uid);
    const studentIndex = students.findIndex((s) => s.uid === uid);

    if (studentIndex !== -1) {
    students[studentIndex] = req.body;
    res.json({ message: 'Put done', student: students[studentIndex] });
    } else {
    res.status(404).json({ error: 'Student not found' });
    }
});

//patch
app.patch('/students/:uid', (req, res) => {
    const uid = parseInt(req.params.uid);
    const student = students.find((s) => s.uid === uid);
  
    if (student) {
      Object.assign(student, req.body);
      res.json({message: 'Patch done', student });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  });

//delete
app.delete('/students/:uid', (req, res) => {
    const uid = parseInt(req.params.uid);
    const studentIndex = students.findIndex((s) => s.uid === uid);
  
    if (studentIndex !== -1) {
      const deletedStudent = students.splice(studentIndex, 1)[0];
      res.json({ message: 'Delete done', student: deletedStudent });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  });   

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});