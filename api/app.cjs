const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
var crypto = require("crypto");
const credentials = require("./key.json");

// Databases: student_active, student_pending, educator, admin, courses, degree_programs

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
const db = admin.firestore();

const app = express();
app.use(cors());

/*
Endpoint: get all student information
app.get("/student_active/:id")
JSON response: {studentId: "studentId", firstName: "firstName", lastName: "lastName", courses: ["courseId1", "courseId2", ...]}
*/
app.get("/student_active/:id", async (req, res) => {
  try {
    const studentId = req.params.id;

    // Get the student's document from the Firestore database
    const studentDoc = db.collection("student_active").doc(studentId);
    const studentSnapshot = await studentDoc.get();

    if (!studentSnapshot.exists) {
      return res.status(404).send("Student not found");
    }

    const studentData = studentSnapshot.data();
    res.status(200).json(studentData);
  } catch (error) {
    // Send an error response
    res.status(500).send(error.message);
  }
});
/*
Endpoint: add a course to a student's active courses
app.put("/student_active/add/courses")
JSON request: {studentId: "studentId", courseId: "courseId"}
*/
app.put("/student_active/add/courses/:id", express.json(), async (req, res) => {
  try {
    // Check if studentId is present in the request body
    if (!req.body) {
      return res
        .status(400)
        .send("Missing studentId, course, or grade in the request body");
    }

    const studentId = req.params.id;
    const courseToAdd = req.body.courseToAdd;

    // Get the student's document from the Firestore database
    const studentDoc = db.collection("student_active").doc(studentId);

    // Check if the student document exists
    const studentSnapshot = await studentDoc.get();
    if (!studentSnapshot.exists) {
      return res.status(404).send("Student not found");
    }

    // Append the new course and grade to the courses array
    const studentData = studentSnapshot.data();
    const courses = studentData.courses || [];
    courses.push(courseToAdd);

    // Update the student document with the updated courses array
    await studentDoc.update({
      courses: courses,
    });

    // Send a success response
    res.status(200).send("Course and grade added successfully");
  } catch (error) {
    // Send an error response
    res.status(500).send(error.message);
  }
});

/*
Endpoint: remove a course from a student's active courses
app.put("/student_active/delete/courses")
JSON request: {studentId: "studentId", courseId: "courseId"}
*/
app.delete("/student_active/:studentId/course/:courseId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;
    const studentRef = db.collection("student_active").doc(studentId);
    await studentRef.update({
      courses: admin.firestore.FieldValue.arrayRemove(courseId),
    });
    res.send("Course removed successfully.");
  } catch (error) {
    res.status(500).send(error);
  }
});

/*
Endpoint: get all pending students
app.get("/student_pending")
JSON response: [{studentId: "studentId", firstName: "firstName", lastName: "lastName"}, ...]
*/

/*

*/

// app.get(): get all pending students

// app.delete(): remove a pending student

// app.post(pending_student:id): add a pending student to active students

// app.get(): get all active students

// app.post(course:id): create a new course

// app.get(): get all courses

const server = app.listen(process.env.PORT || 3100, () => {
  console.log("http://localhost:3100/");
});
