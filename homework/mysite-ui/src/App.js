import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navigation/Navbar";
import Students from "./components/Student/Students";
import StudentDetail from "./components/Student/StudentDetail";
import LabDetail from "./components/Labs/LabDetail";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/students/" exact component={Students} />
          <Switch>
            <Route path="/lab/:id" exact component={LabDetail} />
            <Route path="/student/:id" exact component={StudentDetail} />
          </Switch>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
