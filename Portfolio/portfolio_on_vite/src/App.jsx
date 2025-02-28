import { BrowserRouter, Routes, Route } from "react-router";

import TestPage from './pages/main/TestPage.jsx'

// layouts
import MainLayout from './layouts/MainLayout.jsx';
import MiscLayout from './layouts/MiscLayout.jsx';
import ProjectLayout from './layouts/ProjectLayout.jsx';

// Individual Routes
import HomePage from './pages/main/HomePage.jsx';
import AboutPage from './pages/main/AboutPage.jsx';
import SecretPage from './pages/main/SecretPage.jsx'
import PuzzlePage from './pages/main/PuzzlePage.jsx'

// Project Routes
import ProjectHome from './pages/projects/ProjectHome.jsx';
import ChoreDeciderPage from './pages/projects/ChoreDeciderPage.jsx';
import CrowSuitePage from './pages/projects/CrowSuitePage.jsx';

import "./scss/custom.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/test" element={<TestPage></TestPage>}></Route>
        
        <Route path="/projects" element={<MainLayout />}>
          <Route index element={<ProjectHome />} />
          <Route path="crowsuite" element={<CrowSuitePage />} />
          <Route path="chore_decider" element={<ChoreDeciderPage />} />
        </Route>

        <Route path="/about" element={<MainLayout />}>
          <Route index element={<AboutPage />} />
        </Route>

        <Route path="/secret" element={<MainLayout />}>
          <Route index element={<SecretPage />} />
        </Route>

        <Route path="/puzzle" element={<MainLayout />}>
          <Route index element={<PuzzlePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
