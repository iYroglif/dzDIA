import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import { Navbar } from "./components/Navigation/Navbar";
import { StartPage } from "./components/StartPage/StartPage";
import { Login } from "./components/Login";
import { CoursesRoutes } from "./components/Courses/CoursesRoutes";
import { LabDetail } from "./components/LabDetail/LabDetail";
import { NotFound } from "./components/NotFound";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box } from "@mui/material";
import { UserContext } from "./UserContext";
import { LabGroups } from "./components/Courses/LabGroups";
import { UserProfile } from "./components/UserProfile";
import { SignIn } from "./components/SignIn";
import { loginURL } from "./api/urls";

export default function App() {
  const [user, setUser] = useState();
  const [themeMode, setThemeMode] = useState("dark");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode: themeMode,
      },
    });
  }, [themeMode]);

  const userContext = useMemo(() => ({ user, setUser }), [user]);

  const toggleThemeMode = useCallback(() => {
    setThemeMode((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    fetch(loginURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setUser(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor="background.default" color="text.primary" minWidth="100%" minHeight="100%">
        <UserContext.Provider value={userContext}>
          <Navbar toggleThemeMode={toggleThemeMode} />
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
