import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText, Button, TextField, Stack, Box, Snackbar, Alert, Link } from '@mui/material';
import { UserContext } from '../UserContext';

const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

export const LabDetail = () => {

    const [lab, setLab] = useState(null)
    const [file, setFile] = useState(null)
    const [score, setScore] = useState(0)
    const [comment, setComment] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const params = useParams()
    const userContext = useContext(UserContext);

    useEffect(() => {
        fetch(`/api/labs/${params.id}`).then((response) => {
            if (response.ok)
                return response.json()
            else
                // @TODO обработка ошибки
                alert('Произошла ошибка при загрузке лабораторной работы. Попробуйте снова')
        }).then((data) => setLab(data))
    }, [params.id])

    useEffect(() => {
        if (file) {
            let formData = new FormData();
            formData.set('file', file, file.name);
            fetch(`/api/labs/${params.id}`, {
                method: 'PUT',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: formData
            }).then((response) => {
                if (response.ok)
                    return response.json()
                else
                    // @TODO обработка ошибки
                    alert('Произошла ошибка при сохранении данных. Попробуйте снова')
            }).then((data) => setLab(data))
        }
    }, [file])

    useEffect(() => {
        if (lab?.score)
            setScore(lab.score)
    }, [lab?.score])

    useEffect(() => {
        if (lab?.comment)
            setComment(lab.comment)
    }, [lab?.comment])

    const handleSaveClick = () => {
        if ((score != lab.score) || (comment != lab.comment)) {
            fetch(`/api/labs/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify({
                    'score': score,
                    'comment': comment
                })
            }).then((response) => {
                if (response.ok) {
                    setSnackbarOpen(true)
                    return response.json()
                }
                else
                    // @TODO обработка ошибки
                    alert('Произошла ошибка при сохранении данных. Попробуйте снова')
            }).then((data) => setLab(data))
        }
    }

    return (
        <>
            {userContext.user && lab &&
                <List>
                    <ListItem>
                        <ListItemText>
                            <Typography variant="h4">Лабораторная работа: {lab.course_lab.name}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography variant="h5">Курс: {lab.course_lab.course.name}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Задание: {lab.course_lab.task}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Выдана: {lab.issued && (new Date(lab.issued)).toLocaleString()}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Выполнена: {lab.completed && (new Date(lab.completed)).toLocaleString()}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Отчет:
                                <Link href={`/api/download/${lab.id}`}> {lab.report}</Link>
                            </Typography>
                            {userContext.user.student && (
                                <Button variant="contained" component="label" sx={{ mt: 2 }}>
                                    Загрузить
                                    <input hidden accept=".pdf" type="file" onChange={(e) => setFile(e.target.files[0])} />
                                </Button>
                            )}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Студент: {lab.student.user.last_name} {lab.student.user.first_name} {lab.student.patronymic}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Последнее изменение: {lab.changed && (new Date(lab.changed)).toLocaleString()}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {userContext.user.student
                                ? (<Typography>Оценка: {lab.score}</Typography>)
                                : (userContext.user.lecturer && (
                                    <>
                                        <Stack direction="row" spacing={3} alignItems="center">
                                            <Typography>Оценка: </Typography>
                                            <TextField label="Баллы" type="number" variant="standard" value={score} onChange={(e) => setScore(e.target.value)} />
                                        </Stack>
                                    </>
                                ))}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            {userContext.user.student
                                ? (<Typography>Комментарий: {lab.comment}</Typography>)
                                : (userContext.user.lecturer && (
                                    <>
                                        <Stack direction="row" spacing={3} alignItems="center">
                                            <Typography>Комментарий: </Typography>
                                            <Box minWidth="40%">
                                                <TextField label="Текст" multiline variant="standard" fullWidth value={comment} onChange={(e) => setComment(e.target.value)} />
                                            </Box>
                                        </Stack>
                                    </>
                                ))}
                        </ListItemText>
                    </ListItem>
                    {userContext.user.lecturer && (
                        <ListItem>
                            <Button variant="outlined" onClick={handleSaveClick}>Сохранить изменения</Button>
                            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
                                <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>Изменения сохранены</Alert>
                            </Snackbar>
                        </ListItem>
                    )}
                </List>
            }
        </>
    );
}
