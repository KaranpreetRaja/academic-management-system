import React, { useState, useEffect } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';
import '../Dashboard.css';
import axios from 'axios';

export default function student() {
  const [program, setProgram] = useState({
    programName: "BEng Chemical Engineering"
  });
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const [disabilities, setDisabilities] = useState({
    visual: false,
    hearing: false,
    motor: false,
    cognitive: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setDisabilities((prevDisabilities) => ({
      ...prevDisabilities,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, including the 'disabilities' state.
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("http://localhost:3100/student_active/hamza29@my.yorku.ca").then(doc => {
      const arr = [];
      doc.data.courses.forEach(doc => {
        arr.push({ courseName: Object.keys(doc)[0], grade: doc[Object.keys(doc)[0]] });
      });
      setCourses(arr);
      console.log(arr);
    });
  }, []);

  return (
    <Container className='outer'>
      <h5>Welcome back <strong>Hamza</strong></h5>
      <br />
      <Tabs defaultActiveKey="programs" className="mb-3">
        <Tab tabClassName="tab" eventKey="programs" title="Your Program">
          <div className="wrapper">
            <div className="inner">
              <h3>Your Current Program</h3>
              <p>{program.programName}</p>
              <hr />
              <h4>Degree Progress Report</h4>
              <div style={{
                padding: 10
              }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <p className="p">Completed Credits <h5>24/120</h5></p>
                  <p className="p">Potential Credits <h5>60/120</h5></p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <p className="p">Progress to Graduation <br /><ProgressBar variant='danger' animated={true} now={20} label={`${20}%`} /></p>
                  <p className="p">Potential Progress  <br /><ProgressBar variant='danger' animated={true} now={50} label={`${50}%`} /></p>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <p className="p">Current GPA <h5>8.0</h5></p>
                  <p className="p">List of Grades <br /> {courses.map(doc => {
                    return <p style={{ marginTop: 10 }}>{doc.courseName} - {doc.grade}</p>
                  })}</p>
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="courses" title="Current Courses">
          <div className="wrapper">
            <button className="btn btn-dark" onClick={handleShow}>Add/Drop courses</button>
            {courses.map(doc => {
              return (
                <div className='item'>
                  {doc.courseName}
                </div>
              )
            })}
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="accessibility" title="Accessibility Form">
          <div className="wrapper">
            <div>
              <h4 style={{marginTop: 20, fontWeight: "bold"}}>Accessibility Request Form</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="name"
                  value={name}
                  style={{width: 300}}
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <br/>
                <input
                  type="email"
                  id="email"
                  value={email}
                  style={{width: 300, marginTop: 10}}
                  placeholder='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br/>
                <textarea
                  id="request"
                  value={request}
                  placeholder='Request'
                  onChange={(e) => setRequest(e.target.value)}
                  required
                />
                <br/>
                <div>
                  <p>Select your disabilities (if any):</p>
                  <label>
                    <input
                      type="checkbox"
                      name="visual"
                      checked={disabilities.visual}
                      onChange={handleCheckboxChange}
                    /> Visual
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="hearing"
                      checked={disabilities.hearing}
                      onChange={handleCheckboxChange}
                    /> Hearing
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="motor"
                      checked={disabilities.motor}
                      onChange={handleCheckboxChange}
                    /> Motor
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="cognitive"
                      checked={disabilities.cognitive}
                      onChange={handleCheckboxChange}
                    /> Cognitive
                  </label>
                </div>

                <button className='btn btn-primary' type="submit">Submit</button>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add or Drop a course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{
            display: "flex",
            flexDirection: "row"
          }}>
            <input style={{ marginRight: 10 }} placeholder='Course Code' />
            <a style={{ marginRight: 10 }} href='#'>Add</a>
            <a href='#'>Drop</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}
