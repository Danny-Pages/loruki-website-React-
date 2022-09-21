import "./App.css";
import "./assets/styles/utilities.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Docs from "./pages/Docs/Docs";
import Features from "./pages/Features/Features";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="features" element={<Features />} />
          <Route path="docs" element={<Docs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
