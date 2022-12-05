import { ListItem, Button, Snackbar, Alert } from "@mui/material";

export const SaveButtonAndSnackbar = ({ handleSaveClick, snackbarOpen, handleSnackbarClose }) => {
  return (
    <ListItem>
      <Button variant="outlined" onClick={handleSaveClick}>
        Сохранить изменения
      </Button>

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
          Изменения сохранены
        </Alert>
      </Snackbar>
    </ListItem>
  );
};
