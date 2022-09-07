import { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { FormControl, InputLabel, Input, InputAdornment, IconButton, Stack, Typography, Button, Box, Grid } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const Login = () => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault()
        let formData = new FormData()
        formData.append("username", login.username)
        formData.append("password", login.password)
        fetch('/api/login/', {
            method: 'POST',
            body: formData
        }).then((response) => {
            if (response.ok)
                return response.json()
            else
                // @TODO обработка ошибки аутентификации
                alert('Ошибка входа. Проверьте правильность введеных данных и попробуйте снова')
        }).then((data) => userContext.setUser(data))
            .then(() => navigate(from))
    }

    return (
        <Box display="flex" justifyContent="center">
            <Box minWidth={300} textAlign="center">
                <Typography variant="h4">Вход</Typography>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={5} paddingTop={3}>
                        <FormControl>
                            <InputLabel htmlFor="username">Имя пользователя</InputLabel>
                            <Input id="username" type='text' value={login.username} onChange={(e) => { setLogin({ password: login.password, username: e.target.value }) }} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="password">Пароль</InputLabel>
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={login.password}
                                onChange={(e) => { setLogin({ password: e.target.value, username: login.username }) }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            onMouseDown={(e) => e.preventDefault()}>
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl>
                            <Button variant="outlined" type="submit">Войти</Button>
                        </FormControl>
                    </Stack>
                </form>
            </Box>
        </Box>
    )
}