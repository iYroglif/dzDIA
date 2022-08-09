import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from "./components/Navigation/Navbar";
import { StartPage } from './components/StartPage';
import { Login } from './components/Login';
import { Students } from "./components/Student/Students";
import { Courses } from "./components/Courses/Courses";
import StudentDetail from "./components/Student/StudentDetail";
import { LabDetail } from "./components/Labs/LabDetail";
import CourseLabDetail from './components/Courses/CourseLabDetail';
import StudentsEdit from "./components/Student/StudentsEdit";
import Report from './components/Report/Report';
import { NotFound } from './components/NotFound';

export default function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('/api/login/')
      .then((response) => {
        if (response.ok)
          return response.json()
      }).then((data) => setUser(data))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="login" element={<Login />} />
        <Route path="courses/*" element={<Courses />} />
        <Route path="labs/:id" element={<LabDetail />} />

        <Route path="students" element={<Students />}>
          <Route path=":id" element={<StudentDetail />} />
        </Route>
        <Route path="students-edit" element={<StudentsEdit />} />
        <Route path="report" element={<Report />} />
        <Route path="courses-labs/:id" element={<CourseLabDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
