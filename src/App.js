import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={About}></Route>
            <Route path="/work" component={Work}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
