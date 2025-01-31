import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Create from './Pages/Create';
import Edit from './Pages/Edit';
import Read from './Pages/Read';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/read/:id" element={<Read/>}/>
      </Routes>
    </Router>
  )
}

export default App
