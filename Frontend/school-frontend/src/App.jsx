// src/App.jsx (minimal to avoid missing files)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./pages/About/About";
import Welcome from "./pages/About/Welcome";
import OurPeople from "./pages/About/OurPeople"; // add this
import OurMission from "./pages/About/OurMission";
import ExperienceMarefat from "./pages/ExperienceMarefat/ExperienceMarefat";
import Admission from "./pages/Admission/Admission";
import TheLatest from "./pages/TheLatest/TheLatest";
import Alumni from "./pages/Alumni/Alumni";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/welcome" element={<Welcome />} />
        <Route path="/about/people" element={<OurPeople />} />
        <Route path="/about/mission" element={<OurMission />} />
        <Route path="/experience" element={<ExperienceMarefat />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/latest" element={<TheLatest />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
}
