import { BrowserRouter, Routes, Route } from "react-router";

import MainLayout from './layouts/MainLayout.jsx';
import MiscLayout from './layouts/MiscLayout.jsx';
import ProjectLayout from './layouts/ProjectLayout.jsx';

import AboutPage from './pages/AboutPage.jsx';
import API_Page from './pages/API_Page.jsx';
import ChorganizerPage from './pages/ChorganizerPage.jsx';
import CrowSuitePage from './pages/CrowSuitePage.jsx';
import HomePage from './pages/HomePage.jsx';
import MiscHome from './pages/MiscHome.jsx';
import ProjectHome from './pages/ProjectHome.jsx';
import TerminalPage from './pages/TerminalPage.jsx';
import DSA_Page from './pages/DSA_Page.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        
        <Route path="/projects" element={<ProjectLayout />}>
          <Route index element={<ProjectHome />} />
          <Route path="crowsuite" element={<CrowSuitePage />} />
          <Route path="chorganizer" element={<ChorganizerPage />} />
        </Route>

        <Route path="/misc" element={<MiscLayout />}>
          <Route index element={<MiscHome />} />
          <Route path="api_fun" element={<API_Page />} />
          <Route path="terminal_fun" element={<TerminalPage />} />
          <Route path="dsa_fun" element={<DSA_Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
