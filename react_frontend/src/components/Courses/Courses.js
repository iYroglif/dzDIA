import { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { CourseLabs } from "./CourseLabs";

export const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('/api/courses/').then(response => {
            if (response.ok)
                return response.json()
        }).then((data) => setCourses(data))
    }, [])

    return (
        <>
            <div class="list-group">
                <li class="list-group-item">Курсы:</li>
                {courses.map(c => (
                    <Link class="list-group-item list-group-item-action" to={`/courses/${c.id}`}>{c.name}</Link>
                ))}
            </div>
            <Routes>
                <Route path=":id" element={<CourseLabs courses={courses} />} />
            </Routes>
        </>
    );
}
