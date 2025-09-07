// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero"; // or Home page component
import About from "./pages/About";
import ExperienceMarefat from "./pages/ExperienceMarefat";
import Admission from "./pages/Admission"; // Import the Admission page
import TheLatest from "./pages/TheLatest"; // Import TheLatest page
import Alumni from "./pages/Alumni"; // Import the Alumni page

// import other pages as needed

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<ExperienceMarefat />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/latest" element={<TheLatest />} />
        <Route path="/alumni" element={<Alumni />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}
