import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
    </>
  )
}

export default App
