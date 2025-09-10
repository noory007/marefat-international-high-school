import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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

// The Latest (make sure these paths exist exactly)
import TheLatest from "./pages/TheLatest/TheLatest";
import News from "./pages/TheLatest/News";
import Bulletin from "./pages/TheLatest/Bulletin";
import Calendar from "./pages/TheLatest/Calendar";
import AdmissionEvents from "./pages/TheLatest/AdmissionEvents";
//import AlumniEvents from "./pages/TheLatest/AlumniEvents";

// Other
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

        {/* Admission */}
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission/welcome" element={<AdmissionWelcome />} />
        <Route path="/admission/apply/lower" element={<ApplyLower />} />
        <Route path="/admission/apply/middle" element={<ApplyMiddle />} />
        <Route path="/admission/apply/upper" element={<ApplyUpper />} />

        {/* The Latest */}
        <Route path="/latest" element={<TheLatest />} />
        <Route path="/latest/news" element={<News />} />
        <Route path="/latest/bulletin" element={<Bulletin />} />
        <Route path="/latest/calendar" element={<Calendar />} />
        <Route path="/latest/admission-events" element={<AdmissionEvents />} />
        {/* <Route path="/latest/alumni-events" element={<AlumniEvents />} /> */}
        {/* If you ever had the old alumnae path, keep a redirect */}
        <Route
          path="/latest/alumnae-events"
          element={<Navigate to="/latest/alumni-events" replace />}
        />

        {/* Other */}
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
}
