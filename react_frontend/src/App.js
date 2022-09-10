import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar } from "./components/Navigation/Navbar";
import { StartPage } from './components/StartPage';
import { Login } from './components/Login';
import { CoursesRoutes } from "./components/Courses/CoursesRoutes";
import { LabDetail } from "./components/LabDetail";
import { NotFound } from './components/NotFound';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
import { UserContext } from './UserContext';
import { LabGroups } from "./components/Courses/LabGroups";
import { UserProfile } from "./components/UserProfile";
import { SignIn } from './components/SignIn';

export default function App() {
  const [user, setUser] = useState(null)
  const [themeMode, setThemeMode] = useState('dark')

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  })

  const userContext = {
    user: user,
    setUser: setUser,
  }

  useEffect(() => {
    fetch('/api/login/')
      .then((response) => {
        if (response.ok)
          return response.json()
      }).then((data) => setUser(data))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary" position="absolute" minHeight="100%" minWidth="100%">
        <UserContext.Provider value={userContext}>
          <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
          <Container sx={{ pt: 10 }}>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="login" element={<Login />} />

              <Route path="courses/*" element={userContext.user ? <CoursesRoutes /> : <SignIn />} />
              <Route path="labs/:id" element={userContext.user ? <LabDetail /> : <SignIn />} />
              <Route path="lab-groups/:id" element={userContext.user ? <LabGroups /> : <SignIn />} />
              <Route path="profile" element={userContext.user ? <UserProfile /> : <SignIn />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </UserContext.Provider>
      </Box>
    </ThemeProvider>
  );
}
