import React, { useState, useEffect } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from 'react-bootstrap/Container';
import { Modal, Button} from 'react-bootstrap';
import axios from 'axios';
import '../Dashboard.css';

export default function prof() {
  const [courses1, setCourses1] = useState(
    [
      { courseId: "2024/SU/EECS/1500/C" },
      { courseId: "2024/SU/EECS/1300/E" },
      { courseId: "2023/FW/EECS/1200/F" },
      { courseId: "2023/FW/EECS/1100/A" }
    ]);
  const [show, setShow] = useState(false);
  const [access, setAccess] = useState(false)
  const handleClose = () => setShow(false);
  const [course, setCourse] = useState();
  const handleShow = (courseId, access) => {
    for(var i = 0; i < courses1.length; i++){
      if(courses1[i].courseId == courseId){
        setCourse(courses1[i].courseId)
      }
    }
    setShow(true)
    if(access == "A"){
      setAccess(true)
    }
    else{
      setAccess(false)
    }
};

  useEffect(() => {
    console.log("load stuff");
  }, []);

  return (
    <Container className='outer'>
      <h5>Welcome back <strong>Karanpreet</strong></h5>
      <br />
      <Tabs defaultActiveKey="courses1" className="mb-3">
        <Tab tabClassName="tab" eventKey="courses1" title="Current Courses">
          <div className="wrapper">
            {courses1.map(doc => {
              return (
                <>
                <div className='item' onClick={(e) => {handleShow("2023/FW/EECS/1200/F", "B")}}>
                  {doc.courseId}
                </div>
                
              </>
              )
            })}
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="accessibility" title="Accessibility Requests">
          <div className="wrapper">
            <div className='item'>
              <div onClick={(e) => { handleShow("2023/FW/EECS/1200/F", "A") }}>
              Accessibility Request from Rayyan Ahmed
              </div>
              <div>
                <Button variant="primary" style={{ margin: "5px" }}>Approve</Button>
                <Button variant="secondary">Decline</Button>
              </div>
            </div>
            <div className='item'>
              <div onClick={(e) => { handleShow("2023/FW/EECS/1200/F", "A") }}>
                Accessibility Request from Rameen Raja
              </div>
              <div>
                <Button variant="primary" style={{ margin: "5px" }}>Approve</Button>
                <Button variant="secondary">Decline</Button>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
      <Modal
                show={show} onHide={(e) => handleClose()} animation={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Course Description
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
          {access == false ? <div><p>
            Course Name: {course}
          </p>
            <p>
              Teaching Assistant: Rameen
            </p>
            <h4>
              Students:
            </h4>
            <p>
              Rameen Islam
            </p>

            <p>
              Justin Yan
            </p>

            <p>
              Jordan Christopher
            </p>

            <p>
              Ayaan Mohammad
            </p>
            <p>
              Lora Patel

            </p>
          </div> : <><h4>Message from the student</h4>
          <p>I have severe depression</p>
          </>
          }
                  
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
              </Modal>
    </Container>
  )
}
