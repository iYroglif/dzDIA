import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navigation/Navbar";
import Students from "./components/Student/Students";
import Courses from "./components/Courses/Courses";
import StudentDetail from "./components/Student/StudentDetail";
import CourseLabs from "./components/Courses/CourseLabs";
import LabDetail from "./components/Labs/LabDetail";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CourseLabDetail from './components/Courses/CourseLabDetail';
import StudentsEdit from "./components/Student/StudentsEdit";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/students/" exact component={Students} />
          <Route path="/courses/" exact component={Courses} />
          <Route path="/students-edit/" exact component={StudentsEdit} />
          <Switch>
            <Route path="/labs/:id" exact component={LabDetail} />
            <Route path="/students/:id" exact component={StudentDetail} />
            <Route path="/courses/:id" exact component={CourseLabs} />
            <Route path="/courses-labs/:id" exact component={CourseLabDetail} />
          </Switch>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
