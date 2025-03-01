// React Routing
import { BrowserRouter, Routes, Route } from "react-router";

// layouts
import MainLayout from './layouts/MainLayout.jsx';

// Individual Routes
import HomePage from './pages/main/HomePage.jsx';
import AboutPage from './pages/main/AboutPage.jsx';
import SecretPage from './pages/main/SecretPage.jsx'
import PuzzlePage from './pages/main/PuzzlePage.jsx'

// Project Routes
import ProjectHome from './pages/projects/ProjectHome.jsx';
import ChoreDeciderPage from './pages/projects/ChoreDeciderPage.jsx';
import CrowSuitePage from './pages/projects/CrowSuitePage.jsx';

// Custom CSS
import "./scss/custom.scss"

function App() {
  return (
    // routes under the central root path, and routes under /projects
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="secret" element={<SecretPage />} />
          <Route path="puzzle" element={<PuzzlePage />} />
        </Route>
        
        <Route path="/projects" element={<MainLayout />}>
          <Route index element={<ProjectHome />} />
          <Route path="crowsuite" element={<CrowSuitePage />} />
          <Route path="chore_decider" element={<ChoreDeciderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
