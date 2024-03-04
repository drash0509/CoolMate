import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainRoute from './routes/routes';
import './index.css'

const App = () => {
  return (
    <Router>
    <div >
<Navbar/>
     <MainRoute/>

</div>

    </Router>
   
  )
}

export default App
