import "./App.css";
import Blog from "./components/Blog";
import Blogs from "./components/Blogs";
import CountriesVisited from "./components/CountriesVisited";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./components/Works";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/countries-visited" element={<CountriesVisited />} />
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
