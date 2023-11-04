import React, { useState, useEffect } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from 'react-bootstrap/Container';
import '../Dashboard.css';
import axios from 'axios';

export default function admin() {
  const [programs, setPrograms] = useState([]);
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3100/get_all_professors").then(doc => {
      setInstructors(doc.data);
    });
    axios.get("http://localhost:3100/get_all_courses").then(doc => {
      setCourses(doc.data);
    });
    axios.get("http://localhost:3100/get_all_active_students").then(doc => {
      setStudents(doc.data);
    });
    axios.get("http://localhost:3100/get_all_program").then(doc => {
      setPrograms(doc.data);
    });
  }, []);

  return (
    <Container className='outer'>
      <Tabs defaultActiveKey="programs" className="mb-3">
        <Tab tabClassName="tab" eventKey="programs" title="Programs">
          <div className="wrapper">
            <button className="btn btn-dark">Add new +</button>
            {programs.map(doc => {
              return (
                <div className='item'>
                  {doc.programName} <strong>{doc.programId}</strong>
                  <div>
                    <button className="btn btn-danger">Edit</button>
                    <button className="btn btn-danger">Remove</button>
                  </div>
                </div>
              )
            })}
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="courses" title="Courses">
          <div className="wrapper">
            <button className="btn btn-dark">Add new +</button>
            {courses.map(doc => {
              return (
                <div className='item'>
                  {doc.courseName}
                  <div>
                    <button className="btn btn-danger">Edit</button>
                    <button className="btn btn-danger">Remove</button>
                  </div>
                </div>
              )
            })}
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="instructors" title="Instructors">
          <div className="wrapper">
            {instructors.map(doc => {
              return (
                <div className='item'>
                  {doc.firstName} {doc.lastName}
                  <div>
                    <button className="btn btn-danger">Edit</button>
                    <button className="btn btn-danger">Remove</button>
                  </div>
                </div>
              )
            })}
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="students" title="Students">
          <div className="wrapper">
            <button className="btn btn-dark">View pending admissions</button>
            {students.map(doc => {
              return (
                <div className='item'>
                  {doc.firsName} {doc.lastName} <strong>{doc.studentId}</strong>
                  <div>
                    <button className="btn btn-danger">Edit</button>
                    <button className="btn btn-danger">Remove</button>
                  </div>
                </div>
              )
            })}
          </div>
        </Tab>
      </Tabs>
    </Container>
  )
}
