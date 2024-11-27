import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Impress from "./pages/Impress";

import Home from "./pages/Home";
import Career from "./pages/Career";
import JuniorDigitalGovernance from "./pages/JuniorDigitalGovernance";
import TaskManagerDigital from "./pages/TaskManagerDigital";
import ProjectManagerDIgital from "./pages/ProjectManagerDIgital";

function App() {
  return (
    <Router>
      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/privacy-and-policy" element={<PrivacyPolicy />} />
          <Route path="/impress" element={<Impress />} />
          <Route path="/Junior-Digital-Governance-Specialist" element={<JuniorDigitalGovernance/>} />
          <Route path="/task-manager-digital-governance" element={<TaskManagerDigital/>} />
          <Route path="/project-manager-digital-governance" element={<ProjectManagerDIgital/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
