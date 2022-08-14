import { Button, Avatar, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const UserLogin = ({ user }) => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = () => {
        fetch('/api/logout/').then((response) => {
            if (response.ok)
                document.location.href = "/"
        })
    }

    return (
        <>
            {user
                ? <>
                    <Button color="inherit" startIcon={<Avatar>{user.username}</Avatar>} onClick={(e) => setAnchorEl(e.currentTarget)}>{user.username}</Button>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
                        <MenuItem onClick={handleClick}>Выйти</MenuItem>
                    </Menu>
                </>
                : <Button component={Link} to="/login" variant="contained">Войти</Button>
            }
        </>
    )
}