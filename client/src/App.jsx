import Home from "./Home";
//import Markets from "./Markets";
import { Navbar, Footer, Services, Transactions } from "./components";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Home />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
