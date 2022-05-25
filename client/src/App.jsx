import React from "react";

import Home from "./Home";
import Markets from "./Markets";

import { Navbar, Footer, Services, Transactions } from "./components";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Markets" element={<Markets />} />
          </Routes>
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
