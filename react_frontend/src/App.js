import logo from './logo.svg';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from "./components/Navigation/Navbar";
import { StartPage } from './components/StartPage';
import { Login } from './components/Login';
import { CoursesRoutes } from "./components/Courses/CoursesRoutes";
import { LabDetail } from "./components/Labs/LabDetail";
import { NotFound } from './components/NotFound';
import StudentDetail from "./components/Student/StudentDetail";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/api/login/')
      .then((response) => {
        if (response.ok)
          return response.json()
      }).then((data) => setUser(data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary" minHeight={"100%"}>
        <Navbar user={user} />
        <Container sx={{ pt: 10 }}>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="login" element={<Login />} />
            <Route path="courses/*" element={<CoursesRoutes />} />
            <Route path="labs/:id" element={<LabDetail />} />

            <Route path="students/:id" element={<StudentDetail />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
