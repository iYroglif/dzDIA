import { Link as LinkRouter } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Container, Box, Link, IconButton } from '@mui/material';
import { UserLogin } from './UserLogin';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export const Navbar = ({ themeMode, setThemeMode }) => {

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Link component={LinkRouter} to="/" underline="none" color="inherit" mr={"5%"}>
                        <Typography variant="h4" component="h1">Сайт</Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1 }}>
                        <Button color='inherit' component={LinkRouter} to="/courses">Мои курсы</Button>
                    </Box>

                    <IconButton onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')} title="Переключить тему">
                        {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <UserLogin />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
