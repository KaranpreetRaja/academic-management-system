import React, { useState, useEffect } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

import '../Dashboard.css';
import axios from 'axios';


export default function admin() {
  const [programs, setPrograms] = useState([]);
  const [courses, setCourses] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [students, setStudents] = useState([]);
  const [showProgram, setShowProgram] = useState(true)
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (program) => {
    if (program == "program"){
      setShowProgram(true)
    }
    else{
      setShowProgram(false)
    }
    setShow(true)
  };

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
    axios.get("http://localhost:3100/get_all_programs").then(doc => {
      setPrograms(doc.data);
    });
  }, []);

  return (
    <Container className='outer'>
      <h5>Welcome back <strong>Idrak</strong></h5>
      <br />
      <Tabs defaultActiveKey="programs" className="mb-3">
        <Tab tabClassName="tab" eventKey="programs" title="Programs">
          <div className="wrapper">
            <button className="btn btn-dark" onClick={(e) => {handleShow("program")}}>Add new +</button>
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
            <button className="btn btn-dark" onClick={(e) => {handleShow("something")}}>Add new +</button>
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
                  <div>
                    {doc.firstName} {doc.lastName } <strong>[{doc.professorId}]</strong>
                  </div>
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
                  <div>
                    {doc.firstName} {doc.lastName } <strong>[{doc.studentId}]</strong>
                  </div>
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
      <Modal
        show={show} onHide={handleClose} animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {showProgram? 
        <>
        <Modal.Header closeButton>
          
          <Modal.Title id="contained-modal-title-vcenter">
            Add a program
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Program Name</Form.Label>
              <Form.Control placeholder="Enter Program Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Department Name</Form.Label>
              <Form.Control placeholder="Enter Department Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Instructor Name</Form.Label>
              <Form.Control placeholder="Enter Instructor Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter a list of courses</Form.Label>
              <Form.Control placeholder="Enter courses list" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter the total credits</Form.Label>
              <Form.Control placeholder="Enter total credits" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter the kind of degree</Form.Label>
              <Form.Control placeholder="Enter the type of degree" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter the total number of courses</Form.Label>
              <Form.Control placeholder="Enter the total number of courses" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter the duration in years</Form.Label>
              <Form.Control placeholder="Enter the duration" />
            </Form.Group>
          </Form>
        </Modal.Body>
        </>: <>
        <Modal.Header closeButton>
          
          <Modal.Title id="contained-modal-title-vcenter">
            Add a Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Course Name</Form.Label>
              <Form.Control placeholder="Enter Course Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Department Name</Form.Label>
              <Form.Control placeholder="Enter Department Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Instructor Name</Form.Label>
              <Form.Control placeholder="Enter Instructor Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter the credit</Form.Label>
              <Form.Control placeholder="Enter credit" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter the semester</Form.Label>
              <Form.Control placeholder="Enter the semester" />
            </Form.Group>
          </Form>
        </Modal.Body>
        
        </>}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Add</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
