import { BrowserRouter, Routes, Route } from "react-router";

// layouts
import MainLayout from './layouts/MainLayout.jsx';
import MiscLayout from './layouts/MiscLayout.jsx';
import ProjectLayout from './layouts/ProjectLayout.jsx';

// main page
import HomePage from './pages/main/HomePage.jsx';
import AboutPage from './pages/main/AboutPage.jsx';

// projects
import ProjectHome from './pages/projects/ProjectHome.jsx';
import ChorganizerPage from './pages/projects/ChorganizerPage.jsx';
import CrowSuitePage from './pages/projects/CrowSuitePage.jsx';

// misc
import MiscHome from './pages/misc/MiscHome.jsx';
import API_Page from './pages/misc/API_Page.jsx';
import TerminalPage from './pages/misc/TerminalPage.jsx';
import DSA_Page from './pages/misc/DSA_Page.jsx';
import DatabasesPage from './pages/misc/DatabasesPage.jsx';




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
          <Route path="db_fun" element={<DatabasesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
