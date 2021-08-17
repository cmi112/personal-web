import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import Home from "./components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css"
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <Router>
      <div className="top-container">
        <nav className="nav-bar">
          <ul className="ul-nav">
            <li>
              <Link exact to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          
        </Switch>
      </div>
    </Router>
    <Footer/>
    </>
  );
}














// import React from 'react';
// import './App.css';
// import Footer from './components/Footer';
// import Home from './components/Home';

// function App() {
//   return (
//     <div className="App">
//       <Home />
//       <Footer/>
//     </div>
//   );
// }

// export default App;
