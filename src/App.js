//IMPORTS//
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
//route imports//
import Procedures from "./components/Procedures";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div class="nav-links">
        <Link to="/procedures">Procedures</Link>
        <Link to="/contact">Contact</Link>

        <Route path="/procedures" component={Procedures} />
        <Route path="/contact" component={Contact} />
      </div>
      <h1>🦷</h1>
    </BrowserRouter>
  );
}
export default App;
