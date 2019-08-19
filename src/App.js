import React from 'react';
import './App.css';
import OpportunitiesPage from './features/opportunitiesPage/OpportunitiesPage';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Navbar from './features/navbar/Navbar';
import HomePage from './features/HomePage/HomePage';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Route exact path='/' component={HomePage}/>
      <Route path='/op' component={OpportunitiesPage}/>
    </Router>
    </>
  );
}

export default App;
