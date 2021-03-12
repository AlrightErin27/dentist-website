//IMPORTS//
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
//route imports//
import Procedures from "./components/Procedures";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="nav-links">
        <Link to="/procedures" className="link">
          Procedures
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Link to="/" className="link">
          Home
        </Link>
        <Switch>
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>

      <h1 className="tooth">🦷 😃 🦷 😃 🦷 </h1>
    </BrowserRouter>
  );
}
export default App;
