import { Link as LinkRouter } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography, Container, Box, Link } from '@mui/material';
import { UserLogin } from './UserLogin';

export const Navbar = ({ user }) => {

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Link component={LinkRouter} to="/" underline="none" color="inherit" mr={"5%"}>
                        <Typography variant="h4" component="h1">Сайт</Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1 }}>
                        <Button component={LinkRouter} to="/courses">Мои курсы</Button>
                    </Box>

                    <UserLogin user={user} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
