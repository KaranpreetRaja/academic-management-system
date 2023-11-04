const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const credentials = require("./key.json");

// Databases: student_active, student_pending, educator, admin, courses, degree_programs

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
const db = admin.firestore();

const app = express();
app.use(cors());

app.get("/student_active/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const studentRef = db.collection("student_active").doc(studentId);
    const doc = await studentRef.get();
    if (!doc.exists) {
      res.status(404).send("No such student!");
    } else {
      res.send(doc.data().courses);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/student_active/:studentId/course/:courseId", async (req, res) => {
  try {
    const studentId = req.params.studentId;
    const courseId = req.params.courseId;
    const studentRef = db.collection("student_active").doc(studentId);
    await studentRef.update({
      courses: admin.firestore.FieldValue.arrayUnion(courseId),
    });
    res.send("Course added successfully.");
  } catch (error) {
    res.status(500).send(error);
  }
});

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

const server = app.listen(process.env.PORT || 3100, () => {
  console.log("http://localhost:3100/");
});
