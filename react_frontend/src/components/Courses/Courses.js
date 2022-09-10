import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

export const Courses = ({ courses }) => {
    return (
        <>
            <Typography variant="h4" component="h2" sx={{ mb: 3 }}>Мои курсы:</Typography>

            <Grid container spacing={3}>
                {courses.map((course) =>
                    <Grid key={course.id} item>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardContent>
                                <Typography variant="h6" component="h3">{course.name}</Typography>
                                <Typography variant="body1">{course.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Box sx={{ flexGrow: 1 }}></Box>
                                <Button component={Link} to={`/courses/${course.id}`}>Открыть</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </>
    );
}
