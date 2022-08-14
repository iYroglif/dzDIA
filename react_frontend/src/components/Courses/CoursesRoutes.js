import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import { Courses } from "./Courses";
import { CourseLabs } from "./CourseLabs";

export const CoursesRoutes = () => {
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        fetch('/api/courses/').then(response => {
            if (response.ok)
                return response.json()
        }).then((data) => setCourses(data))
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Courses courses={courses} />} />
            <Route path=":id/*" element={<CourseLabs courses={courses} />} />
        </Routes>
    )
}