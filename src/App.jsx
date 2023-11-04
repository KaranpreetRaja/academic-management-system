import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from "./components/nav"

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Academic Management System</h1>
        <p>Login as: </p>
        <a href='/login/student'><button className='btn btn-danger'>Student</button></a>
        <a href='/login/educator'><button className='btn btn-danger'>Educator</button></a>
        <a href='/login/admin'><button className='btn btn-danger'>Admin</button></a>
      </div>
    </div>
  )
}

export default App
