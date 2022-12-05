import { Typography, ListItem, ListItemText, TextField, Stack, Box } from "@mui/material";

export const CommentRow = ({ isStudent, isLecturer, comment, handleCommentChange }) => {
  return (
    <ListItem>
      <ListItemText>
        {isStudent ? (
          <Typography>Комментарий: {comment}</Typography>
        ) : (
          isLecturer && (
            <>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography>Комментарий: </Typography>

                <Box minWidth="40%">
                  <TextField label="Текст" multiline variant="standard" fullWidth value={comment} onChange={handleCommentChange} />
                </Box>
              </Stack>
            </>
          )
        )}
      </ListItemText>
    </ListItem>
  );
};
