import { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route } from 'react-router-dom';
import { LabGroups } from './LabGroups';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Button, Box, Divider } from '@mui/material';

export const CourseLabs = ({ courses }) => {

    const [courseLabs, setCourseLabs] = useState(null)
    const [currentCourse, setCurrentCourse] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch(`/api/course-labs/${params.id}`).then((response) => {
            if (response.ok)
                return response.json()
        }).then((data) => setCourseLabs(data))
    }, [params.id])

    useEffect(() => {
        console.log('effect')
        console.log('params.id')
        console.log(params.id)
        console.log('courses')
        console.log(courses)

        if (params.id != null)
            setCurrentCourse(courses.find((item) => item.id == params.id))
    }, [courses, params.id])

    return (
        <>
            <Routes>
                <Route path="labs/:id" element={<LabGroups />} />
            </Routes>

            {currentCourse && courseLabs &&
                <>
                    <Typography variant="h4" sx={{ mb: 3 }}>{currentCourse.name}</Typography>
                    <Typography variant="h5" sx={{ mb: 2 }}>Лабораторные работы: </Typography>

                    {courseLabs.map(lab => (
                        <>
                            <Accordion>
                                <AccordionSummary>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6">{lab.name}</Typography>
                                    </Box>
                                    <Button component={Link} to={`/labs/${lab.id}`}>Перейти</Button>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant="body1">{lab.task}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </>
                    ))}
                </>
            }
        </>
    );
}

// <Link to={`/courses/${params.id}/labs/${lab.id}`}>Препод {lab.name}</Link>