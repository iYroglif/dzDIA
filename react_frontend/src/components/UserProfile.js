import { useContext } from 'react';
import { UserContext } from '../UserContext';

export const UserProfile = () => {
    const userContext = useContext(UserContext);

    return (
        <>
            Профиль
        </>
    )
}