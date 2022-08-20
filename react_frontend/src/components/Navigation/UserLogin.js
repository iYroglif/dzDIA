import { Button, Avatar, Menu, MenuItem, Divider } from '@mui/material';
import { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

export const UserLogin = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const userContext = useContext(UserContext);
    const location = useLocation()
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('/api/logout/').then((response) => {
            if (response.ok)
                userContext.setUser(null)
            else
                // @TODO сделать нормальную обработку (добавить Snackbar)
                alert('Произошла ошибка. Попробуйте снова')
        }).then(() => navigate(0))
    }

    return (
        <>
            {userContext.user
                ? <>
                    <Button color="inherit" startIcon={<Avatar>{userContext.user.username}</Avatar>} onClick={(e) => setAnchorEl(e.currentTarget)}>{userContext.user.username}</Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                        <MenuItem onClick={() => { navigate('/profile') }}>Профиль</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClick}>Выйти</MenuItem>
                    </Menu>
                </>
                : <Button component={Link} to="/login" state={{ from: location }} variant="contained">Войти</Button>
            }
        </>
    )
}