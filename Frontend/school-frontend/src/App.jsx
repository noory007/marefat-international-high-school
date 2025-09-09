// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

// About
import About from "./pages/About/About";
import Welcome from "./pages/About/Welcome";
import OurPeople from "./pages/About/OurPeople";
import OurMission from "./pages/About/OurMission";

// Experience Marefat
import ExperienceMarefat from "./pages/ExperienceMarefat/ExperienceMarefat";
import LowerSchool from "./pages/ExperienceMarefat/Academics/LowerSchool";
import MiddleSchool from "./pages/ExperienceMarefat/Academics/MiddleSchool";
import UpperSchool from "./pages/ExperienceMarefat/Academics/UpperSchool";

// Other top-level pages
import Admission from "./pages/Admission/Admission";
import TheLatest from "./pages/TheLatest/TheLatest";
import Alumni from "./pages/Alumni/Alumni";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />

        {/* About */}
        <Route path="/about" element={<About />} />
        <Route path="/about/welcome" element={<Welcome />} />
        <Route path="/about/people" element={<OurPeople />} />
        <Route path="/about/mission" element={<OurMission />} />

        {/* Experience Marefat */}
        <Route path="/experience" element={<ExperienceMarefat />} />
        <Route
          path="/experience/academics/lower-school"
          element={<LowerSchool />}
        />
        <Route
          path="/experience/academics/middle-school"
          element={<MiddleSchool />}
        />
        <Route
          path="/experience/academics/upper-school"
          element={<UpperSchool />}
        />

        {/* Other top-level pages */}
        <Route path="/admission" element={<Admission />} />
        <Route path="/latest" element={<TheLatest />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
}
