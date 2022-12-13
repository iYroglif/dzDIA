import { useEffect, useState, useContext, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { List } from "@mui/material";
import { UserContext } from "../../UserContext";
import { labsURL } from "../../api/urls";
import { ReportRow } from "./ReportRow";
import { DetailRow } from "./DetailRow";
import { ScoreRow } from "./ScoreRow";
import { CommentRow } from "./CommentRow";
import { SaveButtonAndSnackbar } from "./SaveButtonAndSnackbar";
import { getCookie } from "./getCookie";

export const LabDetail = () => {
  const [lab, setLab] = useState();
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const inputFile = useRef(null);
  const userContext = useContext(UserContext);
  const params = useParams();

  const handleUploadFile = useCallback(async () => {
    const file = inputFile.current.files[0];

    if (file) {
      const formData = new FormData();

      formData.set("file", file, file.name);

      const response = await fetch(`${labsURL}/${params.id}`, {
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
      const response = await fetch(`${labsURL}/${params.id}`, {
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
  }, [comment, lab?.comment, lab?.score, params.id, score]);

  const handleScoreChange = useCallback((event) => {
    setScore(event.target.value);
  }, []);

  const handleCommentChange = useCallback((event) => {
    setComment(event.target.value);
  }, []);

  const handleSnackbarClose = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  useEffect(() => {
    let ignore = false;

    fetch(`${labsURL}/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // @TODO обработка ошибки
        else {
          alert("Произошла ошибка при загрузке лабораторной работы. Попробуйте снова");
        }
      })
      .then((data) => {
        if (!ignore) {
          setLab(data);
        }
      });

    return () => {
      ignore = true;
    };
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

  return (
    <>
      {userContext.user && lab && (
        <List>
          {[
            { variant: "h4", component: "h2", text: `Лабораторная работа: ${lab.course_lab.name}` },
            { variant: "h5", component: "h3", text: `Курс: ${lab.course_lab.course.name}` },
            { text: `Задание: ${lab.course_lab.task}` },
            { text: `Выдана: ${lab.issued && new Date(lab.issued).toLocaleString()}` },
            { text: `Выполнена: ${lab.completed && new Date(lab.completed).toLocaleString()}` },
          ].map((row) => (
            <DetailRow {...row} />
          ))}

          <ReportRow
            labId={lab.id}
            labReport={lab.report}
            isStudent={userContext.user.student}
            ref={inputFile}
            handleUploadFile={handleUploadFile}
          />

          {[
            `Студент: ${lab.student.user.last_name} ${lab.student.user.first_name} ${lab.student.patronymic}`,
            `Последнее изменение: ${lab.changed && new Date(lab.changed).toLocaleString()}`,
          ].map((text) => (
            <DetailRow text={text} />
          ))}

          <ScoreRow
            isStudent={userContext.user.student}
            isLecturer={userContext.user.lecturer}
            score={score}
            handleScoreChange={handleScoreChange}
          />

          <CommentRow
            isStudent={userContext.user.student}
            isLecturer={userContext.user.lecturer}
            comment={comment}
            handleCommentChange={handleCommentChange}
          />

          {userContext.user.lecturer && (
            <SaveButtonAndSnackbar
              handleSaveClick={handleSaveClick}
              snackbarOpen={snackbarOpen}
              handleSnackbarClose={handleSnackbarClose}
            />
          )}
        </List>
      )}
    </>
  );
};
