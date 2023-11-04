import React, { useState, useEffect } from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from 'react-bootstrap/Container';
import '../Dashboard.css';

export default function prof() {
  const [courses1, setCourses1] = useState(
    [
      { courseId: "2024/SU/EECS/1500/C" },
      { courseId: "2024/SU/EECS/1300/E" },
      { courseId: "2023/FW/EECS/1200/F" },
      { courseId: "2023/FW/EECS/1100/A" }
    ]);
  const [courses2, setCourses2] = useState(
    [
      { courseId: "2023/SU/EECS/3311/E" },
      { courseId: "2023/FW/EECS/3100/A" },
      { courseId: "2023/FW/EECS/2100/A" },
      { courseId: "2023/FW/EECS/1000/B" },
      { courseId: "2023/FW/EECS/1000/C" }
    ]);

  useEffect(() => {
    console.log("load stuff");
  }, []);

  return (
    <Container className='outer'>
      <Tabs defaultActiveKey="courses1" className="mb-3">
        <Tab tabClassName="tab" eventKey="courses1" title="Current Courses">
          <div className="wrapper">
            {courses1.map(doc => {
              return (
                <div className='item'>
                  {doc.courseId}
                </div>
              )
            })}
          </div>
        </Tab>
        <Tab tabClassName="tab" eventKey="courses2" title="Future Courses">
          <div className="wrapper">
            {courses2.map(doc => {
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
