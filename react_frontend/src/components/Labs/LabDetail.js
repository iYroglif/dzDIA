import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

export const LabDetail = () => {

    const [lab, setLab] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/labs/${params.id}`).then((response) => {
            if (response.ok)
                return response.json()
        }).then((data) => setLab(data))
    }, [params.id])

    return (
        <>
            {lab &&
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
                            <Typography>Выдана: {lab.issued}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Выполнена: {lab.completed}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Отчет: {lab.report}</Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography>Последнее изменение: {lab.changed}</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            }
        </>
    );
}
