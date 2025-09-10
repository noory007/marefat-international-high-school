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

// Admission
import Admission from "./pages/Admission/Admission";
import AdmissionWelcome from "./pages/Admission/Welcome";
import ApplyLower from "./pages/Admission/ApplyLower";
import ApplyMiddle from "./pages/Admission/ApplyMiddle";
import ApplyUpper from "./pages/Admission/ApplyUpper";
//import Tuition from "./pages/Admission/Tuition";
//import Events from "./pages/Admission/Events";
//import Faq from "./pages/Admission/Faq";

// Other top-level pages
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

        {/* Admission (top + nested pages) */}
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission/welcome" element={<AdmissionWelcome />} />
        <Route path="/admission/apply/lower" element={<ApplyLower />} />
        <Route path="/admission/apply/middle" element={<ApplyMiddle />} />
        <Route path="/admission/apply/upper" element={<ApplyUpper />} />
        {/* <Route path="/admission/tuition" element={<Tuition />} />
        <Route path="/admission/events" element={<Events />} />
        <Route path="/admission/faq" element={<Faq />} /> */}

        {/* Other top-level pages */}
        <Route path="/latest" element={<TheLatest />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
}
