import { BrowserRouter, Routes, Route } from "react-router";
import Cheese from "./components/Cheese.jsx";
import Home from "./components/Home.jsx";
import Settings from "./components/Settings.jsx";
import SecretHome from "./components/SecretHome.jsx";
import Dashboard from "./layouts/Dashboard.jsx";
import SecretDashboard from "./layouts/SecretDashboard.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/secret" element={<SecretDashboard />}>
          <Route index element={<SecretHome />} />
          <Route path="cheese" element={<Cheese />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
