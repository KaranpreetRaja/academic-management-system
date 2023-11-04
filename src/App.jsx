import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Autocomplete from "react-google-autocomplete";
import Navi from "./components/nav"
import Login from './pages/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navi></Navi> */}
    <Login/>
    {/* landing page */}
    </>
  )
}

export default App
