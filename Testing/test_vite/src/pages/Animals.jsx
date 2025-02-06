import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimalLayout from "../layouts/AnimalLayout.jsx";
import Cat from "./Cat.jsx";
import AnimalHome from "./AnimalHome.jsx";



  function Animals() {

    return (
      <>
      <Routes>
          <Route path="/" element={<AnimalLayout />}>
            <Route index element={<AnimalHome />} />
          </Route>
        </Routes>
      </>
    )
  }

  export default Animals;