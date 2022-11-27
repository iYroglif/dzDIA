import { useEffect, useState, useContext, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  TextField,
  Stack,
  Box,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import { UserContext } from "../UserContext";

const getCookie = (name) => {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.split("=")[0] === name);

  return cookie ? cookie.split("=")[1] : undefined;
};

export const LabDetail = () => {
  const [lab, setLab] = useState(null);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const inputFile = useRef(null);
  const userContext = useContext(UserContext);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/labs/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // @TODO обработка ошибки
        else {
          alert(
            "Произошла ошибка при загрузке лабораторной работы. Попробуйте снова"
          );
        }
      })
      .then((data) => setLab(data));
  }, [params.id]);

  useEffect(() => {
    if (lab?.score) {
      setScore(lab.score);
    }
  }, [lab?.score]);

  useEffect(() => {
    if (lab?.comment) {
      setComment(lab.comment);
    }
  }, [lab?.comment]);

  const handleUploadFile = useCallback(async () => {
    const file = inputFile.current.files[0];

    if (file) {
      const formData = new FormData();

      formData.set("file", file, file.name);

      const response = await fetch(`/api/labs/${params.id}`, {
        method: "PUT",
        headers: {
          "X-CSRFToken": getCookie("csrftoken"),
        },
        body: formData,
      });

      if (response.ok) {
        const lab = await response.json();
        setLab(lab);
      } else {
        // @TODO обработка ошибки
        alert("Произошла ошибка при сохранении данных. Попробуйте снова");
      }
    }
  }, [params.id]);

  const handleSaveClick = useCallback(async () => {
    if (score !== lab.score || comment !== lab.comment) {
      const response = await fetch(`/api/labs/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify({
          score: score,
          comment: comment,
        }),
      });

      if (response.ok) {
        setSnackbarOpen(true);
        const lab = await response.json();
        setLab(lab);
      } else {
        // @TODO обработка ошибки
        alert("Произошла ошибка при сохранении данных. Попробуйте снова");
      }
    }
  }, [comment, lab.comment, lab.score, params.id, score]);

  const labRows = [
    "Задание: " + lab.course_lab.task,
    "Выдана: " + lab.issued && new Date(lab.issued).toLocaleString(),
    "Выполнена: " + lab.completed && new Date(lab.completed).toLocaleString(),
  ];

  return (
    <>
      {userContext.user && lab && (
        <List>
          <ListItem>
            <ListItemText>
              <Typography variant="h4" component="h2">
                Лабораторная работа: {lab.course_lab.name}
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              <Typography variant="h5" component="h3">
                Курс: {lab.course_lab.course.name}
              </Typography>
            </ListItemText>
          </ListItem>

          {labRows.map((row) => (
            <ListItem>
              <ListItemText>
                <Typography>{row}</Typography>
              </ListItemText>
            </ListItem>
          ))}

          <ListItem>
            <ListItemText>
              <Typography>
                Отчет:
                <Link href={`/api/download/${lab.id}`}> {lab.report}</Link>
              </Typography>

              {userContext.user.student && (
                <Button variant="contained" component="label" sx={{ mt: 2 }}>
                  Загрузить
                  <input
                    hidden
                    accept=".pdf"
                    type="file"
                    ref={inputFile}
                    onChange={handleUploadFile}
                  />
                </Button>
              )}
            </ListItemText>
          </ListItem>

          {[
            "Студент: " + lab.student.user.last_name + " " + lab.student.user.first_name + " " + lab.student.patronymic,
            "Последнее изменение: " + (lab.changed && new Date(lab.changed).toLocaleString()),
          ].map((row) => (
            <ListItem>
              <ListItemText>
                <Typography>{row}</Typography>
              </ListItemText>
            </ListItem>
          ))}

          <ListItem>
            <ListItemText>
              {userContext.user.student ? (
                <Typography>Оценка: {lab.score}</Typography>
              ) : (
                userContext.user.lecturer && (
                  <>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Typography>Оценка: </Typography>

                      <TextField
                        label="Баллы"
                        type="number"
                        variant="standard"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                      />
                    </Stack>
                  </>
                )
              )}
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText>
              {userContext.user.student ? (
                <Typography>Комментарий: {lab.comment}</Typography>
              ) : (
                userContext.user.lecturer && (
                  <>
                    <Stack direction="row" spacing={3} alignItems="center">
                      <Typography>Комментарий: </Typography>

                      <Box minWidth="40%">
                        <TextField
                          label="Текст"
                          multiline
                          variant="standard"
                          fullWidth
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        />
                      </Box>
                    </Stack>
                  </>
                )
              )}
            </ListItemText>
          </ListItem>

          {userContext.user.lecturer && (
            <ListItem>
              <Button variant="outlined" onClick={handleSaveClick}>
                Сохранить изменения
              </Button>

              <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
              >
                <Alert
                  onClose={() => setSnackbarOpen(false)}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Изменения сохранены
                </Alert>
              </Snackbar>
            </ListItem>
          )}
        </List>
      )}
    </>
  );
};
