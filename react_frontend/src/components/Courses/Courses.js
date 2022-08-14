import { Link, Routes, Route } from 'react-router-dom';
import { CourseLabs } from "./CourseLabs";
import { Grid, Card, CardContent, CardActions, Typography, Button } from '@mui/material';

export const Courses = ({ courses }) => {
    return (
        <>
            {courses &&
                <>
                    <Routes>
                        <Route path=":id/*" element={<CourseLabs courses={courses} />} />
                    </Routes>

                    <Grid container spacing={3}>
                        {courses.map((course) =>
                            <Grid key={course.id} item>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">{course.name}</Typography>
                                        <Typography variant="body1">Описание курса</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button component={Link} to={`/courses/${course.id}`}>Открыть</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                </>
            }
        </>
    );
}
