import { Button, Avatar, Menu, MenuItem, Divider } from "@mui/material";
import { useState, useContext, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutURL } from "../../api/urls";
import { UserContext } from "../../UserContext";

export const UserLogin = () => {
  const [anchorElement, setAnchorElement] = useState();
  const userContext = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    fetch(logoutURL)
      .then((response) => {
        if (response.ok) {
          userContext.setUser();
        }
        // @TODO сделать нормальную обработку (добавить Snackbar)
        else {
          alert("Произошла ошибка. Попробуйте снова");
        }
      })
      .then(() => navigate(0));
  }, []);

  const handleAnchor = useCallback((event) => {
    setAnchorElement(event.currentTarget);
  }, []);

  const closeAnchor = useCallback(() => {
    setAnchorElement();
  }, []);

  const navigateToProfile = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <>
      {userContext.user ? (
        <>
          <Button color="inherit" startIcon={<Avatar>{userContext.user.username}</Avatar>} onClick={handleAnchor}>
            {userContext.user.username}
          </Button>

          <Menu anchorEl={anchorElement} open={Boolean(anchorElement)} onClose={closeAnchor}>
            <MenuItem onClick={navigateToProfile}>Профиль</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
          </Menu>
        </>
      ) : (
        <Button component={Link} to="/login" state={{ from: location }} variant="contained">
          Войти
        </Button>
      )}
    </>
  );
};
