import { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout.jsx";
import BadLayout from "./layouts/BadLayout.jsx";
import AnimalLayout from "./layouts/AnimalLayout.jsx";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Cat from "./pages/Cat";
import AnimalHome from "./pages/AnimalHome.jsx";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/animals" element={<AnimalLayout />}>
          <Route index element={<AnimalHome />} />
          <Route path="cat" element={<Cat/>}></Route>
        </Route>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
