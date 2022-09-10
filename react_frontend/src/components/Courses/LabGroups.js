import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { List, ListItem, Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button, Divider } from '@mui/material';

export const LabGroups = () => {

    const [groups, setGroups] = useState([])
    const [courseLab, setCourseLab] = useState('')
    const params = useParams()

    useEffect(() => {
        fetch(`/api/course-lab/${params.id}`).then((response) => {
            if (response.ok)
                return response.json()
        }).then((data) => setCourseLab(data))
    }, [params.id])

    useEffect(() => {
        fetch(`/api/lab-groups/${params.id}`).then((response) => {
            if (response.ok)
                return response.json()
        }).then((data) => {
            let x = []
            data.forEach(element => {
                let i = x.findIndex((e) => e.group.id === element.student.group.id)
                let status
                if (element.completed == null)
                    status = 'Не выполнена'
                else if (element.completed.split('.')[0] >= element.changed.split('.')[0])
                    status = 'Не проверена'
                else if (element.completed.split('.')[0] < element.changed.split('.')[0])
                    status = 'Проверена'
                if (i !== -1) {
                    x[i].students.push({
                        first_name: element.student.user.first_name,
                        last_name: element.student.user.last_name,
                        patronymic: element.student.patronymic,
                        lab_id: element.id,
                        status: status
                    })
                } else {
                    x.push({
                        group: { id: element.student.group.id, name: element.student.group.name }, students: [{
                            first_name: element.student.user.first_name,
                            last_name: element.student.user.last_name,
                            patronymic: element.student.patronymic,
                            lab_id: element.id,
                            status: status
                        }]
                    })
                }
            });
            setGroups(x)
        })
    }, [params.id])

    return (
        <>
            <Typography variant="h4" component="h2" sx={{ mb: 3 }}>Лабораторная работа: {courseLab.name}</Typography>
            <Typography variant="h5" component="h3" sx={{ mb: 3 }}>Группы:</Typography>
            {groups.map((element) => (
                <Accordion key={element.group.id}>
                    <AccordionSummary>
                        <Typography variant="h6" component="h4">Группа {element.group.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">Студенты:</Typography>
                        <List>
                            <Divider component="li" />
                            {element.students.map((student) => (
                                <div key={student.lab_id}>
                                    <ListItem>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="body1">{student.last_name} {student.first_name} {student.patronymic}</Typography>
                                        </Box>
                                        <Typography variant="body2">{student.status}</Typography>
                                        <Button component={Link} to={`/labs/${student.lab_id}`}>Перейти</Button>
                                    </ListItem>
                                    <Divider component="li" />
                                </div>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    )
}
