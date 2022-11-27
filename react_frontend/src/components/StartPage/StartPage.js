import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import courses_dark from "./courses-dark.png";
import courses_light from "./courses-light.png";
import course_labs_dark from "./course-labs-dark.png";
import course_labs_light from "./course-labs-light.png";
import student_lab_dark from "./student-lab-dark.png";
import student_lab_light from "./student-lab-light.png";
import teacher_student_lab_dark from "./teacher-student-lab-dark.png";
import teacher_student_lab_light from "./teacher-student-lab-light.png";
import lab_groups_dark from "./lab-groups-dark.png";
import lab_groups_light from "./lab-groups-light.png";

export const StartPage = () => {
  const theme = useTheme();

  const elements = [
    {
      width: 650,
      height: 245,
      alt: "Пример курсов",
      image: theme.palette.mode === "dark" ? courses_dark : courses_light,
      title: "Курсы",
      description: "Просматривайте свои текущие курсы",
    },
    {
      width: 650,
      height: 301,
      alt: "Пример лабораторных работ курса",
      image:
        theme.palette.mode === "dark" ? course_labs_dark : course_labs_light,
      title: "Лабораторные работы курса",
      description: "Просматривайте лабораторные работы своих курсов",
    },
    {
      width: 400,
      height: 428,
      alt: "Пример лабораторной работы",
      image:
        theme.palette.mode === "dark" ? student_lab_dark : student_lab_light,
      title: "Лабораторные работы",
      description:
        "Загружайте отчеты по лабораторным работам. Узнавайте свои баллы. Смотрите комментарии преподавателей",
    },
    {
      width: 650,
      height: 389,
      alt: "Пример лабораторных работ студентов",
      image: theme.palette.mode === "dark" ? lab_groups_dark : lab_groups_light,
      title: "Лабораторные работы студентов",
      description:
        "Просматривайте лабораторные работы студентов по группам и их статус выполнения",
    },
    {
      width: 650,
      height: 402,
      alt: "Пример лабораторной работы",
      image:
        theme.palette.mode === "dark"
          ? teacher_student_lab_dark
          : teacher_student_lab_light,
      title: "Лабораторные работы",
      description:
        "Смотрите отчеты студентов. Выставляйте баллы и пишите замечания",
    },
  ].map(({ width, height, alt, image, title, description }) => (
    <Card sx={{ maxWidth: "fit-content" }}>
      <CardMedia
        sx={{ padding: 1, width, height }}
        component="img"
        alt={alt}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  ));

  const accounts = [
    {
      title: "Студент",
      login: "Логин: student",
      password: "Пароль: 5r@M-C_Rx2VhYk_",
    },
    {
      title: "Преподаватель",
      login: "Логин: teacher",
      password: "Пароль: Y.2Sj6ZN2mczdbb",
    },
  ];

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>{elements[0]}</Grid>

      <Grid item>
        <Box display="flex" justifyContent="flex-end">
          {elements[1]}
        </Box>
      </Grid>

      <Grid item container justifyContent="space-around" spacing={3}>
        <Grid item>{elements[2]}</Grid>

        <Grid item alignSelf="end">
          {elements[3]}
        </Grid>
      </Grid>

      <Grid item container justifyContent="space-around" spacing={3}>
        <Grid item>{elements[4]}</Grid>

        <Grid item>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                Тестовые аккаунты:
              </Typography>
            </Grid>

            <Grid item container direction="row" spacing={2}>
              {accounts.map(({ title, login, password }) => (
                <Grid item>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3">
                        {title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {login}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {password}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
