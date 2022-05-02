import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//components
import Routes from './routes/Routes'

function App() {
  return (
    <div className="">
         <Router>
             <Routes />
         </Router>
    </div>
  );
}

export default App;
