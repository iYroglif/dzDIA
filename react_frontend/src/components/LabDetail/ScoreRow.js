import { Typography, ListItem, ListItemText, TextField, Stack } from "@mui/material";

export const ScoreRow = ({ isStudent, isLecturer, score, handleScoreChange }) => {
  return (
    <ListItem>
      <ListItemText>
        {isStudent ? (
          <Typography>Оценка: {score}</Typography>
        ) : (
          isLecturer && (
            <>
              <Stack direction="row" spacing={3} alignItems="center">
                <Typography>Оценка: </Typography>

                <TextField label="Баллы" type="number" variant="standard" value={score} onChange={handleScoreChange} />
              </Stack>
            </>
          )
        )}
      </ListItemText>
    </ListItem>
  );
};
