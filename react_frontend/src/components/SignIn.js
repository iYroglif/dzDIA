import { Link } from 'react-router-dom';
import { Typography } from "@mui/material";

export const SignIn = () => {
    return (
        <Typography>
            <Link to='/login/'>Войдите</Link>
            <> в свой аккаунт чтобы посмотреть данную страницу</>
        </Typography>
    )
}