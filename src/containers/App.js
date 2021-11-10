import React from 'react';
import {
  BrowserRouter as Router,
  Route, Navbar
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={Home}>Home</Route>
        <Route exact path='/movies' component={Movies}>Movies</Route>
        <Route exact path='/directors' component={Directors}>Directores</Route>
        <Route exact path='/actors' component={Actors}>Actors</Route>
      </div>
    </Router>
  );
};

export default App
