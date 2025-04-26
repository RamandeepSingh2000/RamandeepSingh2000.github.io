import "./App.css";
import Blogs from "./components/Blogs";
import CountriesVisited from "./components/CountriesVisited";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/countries-visited" element={<CountriesVisited />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
