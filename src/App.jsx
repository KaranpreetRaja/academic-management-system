import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Autocomplete from "react-google-autocomplete";
import Navi from "../components/nav"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navi></Navi>
    {/* landing page */}
    </>
  )
}

export default App
