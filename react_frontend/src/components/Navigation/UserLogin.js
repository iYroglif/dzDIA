import { Button, Avatar, Menu, MenuItem, Divider } from "@mui/material";
import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

export const UserLogin = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const userContext = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch("/api/logout/")
      .then((response) => {
        if (response.ok) {
          userContext.setUser(null);
        }
        // @TODO сделать нормальную обработку (добавить Snackbar)
        else {
          alert("Произошла ошибка. Попробуйте снова");
        }
      })
      .then(() => navigate(0));
  };

  return (
    <>
      {userContext.user ? (
        <>
          <Button
            color="inherit"
            startIcon={<Avatar>{userContext.user.username}</Avatar>}
            onClick={(e) => setAnchorElement(e.currentTarget)}
          >
            {userContext.user.username}
          </Button>

          <Menu
            anchorEl={anchorElement}
            open={Boolean(anchorElement)}
            onClose={() => setAnchorElement(null)}
          >
            <MenuItem onClick={() => navigate("/profile")}>Профиль</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
          </Menu>
        </>
      ) : (
        <Button
          component={Link}
          to="/login"
          state={{ from: location }}
          variant="contained"
        >
          Войти
        </Button>
      )}
    </>
  );
};
