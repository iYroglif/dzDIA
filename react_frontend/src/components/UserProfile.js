import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Typography } from '@mui/material';

export const UserProfile = () => {
    const userContext = useContext(UserContext);

    return (
        <>
            <Typography>TODO: Профиль</Typography>
        </>
    )
}