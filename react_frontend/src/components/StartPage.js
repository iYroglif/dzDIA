import { Typography, Card, CardMedia, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import courses_dark from '../courses-dark.png';
import courses_light from '../courses-light.png';
import course_labs_dark from '../course-labs-dark.png';
import course_labs_light from '../course-labs-light.png';
import student_lab_dark from '../student-lab-dark.png';
import student_lab_light from '../student-lab-light.png';
import teacher_student_lab_dark from '../teacher-student-lab-dark.png';
import teacher_student_lab_light from '../teacher-student-lab-light.png';

export const StartPage = () => {
    const theme = useTheme();

    return (
        <>
            <Card>
                <CardMedia component="img" image={theme.palette.mode === 'dark' ? courses_dark : courses_light} />
                <CardContent>
                    <Typography gutterBottom variant="h5">Курсы</Typography>
                    <Typography variant="body2" color="text.secondary">Просматривайте свои текущие курсы</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia component="img" image={theme.palette.mode === 'dark' ? course_labs_dark : course_labs_light} />
                <CardContent>
                    <Typography gutterBottom variant="h5">Лабораторные работы курса</Typography>
                    <Typography variant="body2" color="text.secondary">Просматривайте лабораторные работы своих курсов</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia component="img" image={theme.palette.mode === 'dark' ? student_lab_dark : student_lab_light} />
                <CardContent>
                    <Typography gutterBottom variant="h5">Лабораторные работы</Typography>
                    <Typography variant="body2" color="text.secondary">Загружайте отчеты по лабораторным работам. Узнавайте свои баллы. Смотрите комментарии преподавателей</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia component="img" />
                <CardContent>
                    <Typography gutterBottom variant="h5">Лабораторные работы студентов</Typography>
                    <Typography variant="body2" color="text.secondary">Просматривайте лабораторные работы студентов по группам и их статус выполнения</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia component="img" image={theme.palette.mode === 'dark' ? teacher_student_lab_dark : teacher_student_lab_light} />
                <CardContent>
                    <Typography gutterBottom variant="h5">Лабораторные работы</Typography>
                    <Typography variant="body2" color="text.secondary">Смотрите отчеты студентов. Выставляйте баллы и пишите замечания</Typography>
                </CardContent>
            </Card>
        </>
    )
}