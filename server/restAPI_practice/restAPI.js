const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const data = 

app.use(express.json());

const uri = "mongodb+srv://aasthachaudhary5050:AasthaMongo@cluster0.mnrvgwo.mongodb.net/test";
console.log("Database connected");

//creating a schema
const Schema = new mongoose.Schema({
        uid: Number,
        sem1: Number,
        sem2: Number,
        cgpa: Number,
  });

const studentsDocument = mongoose.model("students", Schema);

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
app.patch('/students/v1/:uid', (req, res) => {
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
app.delete('/students/d1/:uid', (req, res) => {
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