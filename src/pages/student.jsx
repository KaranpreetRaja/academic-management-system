import React, { useState, useEffect } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from 'react-bootstrap/Container';
import '../Dashboard.css';

export default function student() {
  const [program, setProgram] = useState({
    programName: "BEng Chemical Engineering"
  });
  const [courses, setCourses] = useState(
    [
      { courseId: "2023/SU/EECS/3311/E" },
      { courseId: "2023/FW/EECS/3100/A" },
      { courseId: "2023/FW/EECS/2100/A" },
      { courseId: "2023/FW/EECS/1000/B" }
    ]);

  useEffect(() => {
    console.log("load stuff");
  }, []);

  return (
    <Container className='outer'>
      <Tabs defaultActiveKey="programs" className="mb-3">
        <Tab tabClassName="tab" eventKey="programs" title="Your Program">
          <div className="wrapper">
            <div className="inner">
              <h3>Your Current Program</h3>
              <p>{program.programName}</p>
              <hr/>
              <h4>Degree Progress Report</h4>
              <button className="btn btn-danger">Run Audit</button>
            </div>
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="courses" title="Current Courses">
          <div className="wrapper">
            <button className="btn btn-dark">Add/Drop courses</button>
            {courses.map(doc => {
              return (
                <div className='item'>
                  {doc.courseId}
                </div>
              )
            })}
          </div>
        </Tab>
      </Tabs>
    </Container>
  )
}
