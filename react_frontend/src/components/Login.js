import { useContext, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext";
import { FormControl, InputLabel, Input, InputAdornment, IconButton, Stack, Typography, Button, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginURL } from "../api/urls";

export const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const formData = new FormData();

      formData.append("username", login.username);
      formData.append("password", login.password);

      const response = await fetch(loginURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const user = await response.json();

        userContext.setUser(user);
        navigate(from);
      } else {
        alert("Ошибка входа. Проверьте правильность введеных данных и попробуйте снова");
      }
    },
    [from, login, navigate, userContext]
  );

  const handleUsernameChange = useCallback((event) => {
    setLogin((prevLogin) => ({
      ...prevLogin,
      username: event.target.value,
    }));
  }, []);

  const handlePasswordChange = useCallback((event) => {
    setLogin((prevLogin) => ({
      ...prevLogin,
      password: event.target.value,
    }));
  }, []);

  const toggleShowPassword = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const preventDefault = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <Box minWidth={300} textAlign="center">
        <Typography variant="h4" component="h2">
          Вход
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={5} paddingTop={3}>
            <FormControl>
              <InputLabel htmlFor="username">Имя пользователя</InputLabel>
              <Input id="username" type="text" value={login.username} onChange={handleUsernameChange} />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={login.password}
                onChange={handlePasswordChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={toggleShowPassword} onMouseDown={preventDefault}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl>
              <Button variant="outlined" type="submit">
                Войти
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
