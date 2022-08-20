import { useState, useEffect, useContext } from "react"
import { Routes, Route, Link } from 'react-router-dom';
import { Courses } from "./Courses";
import { CourseLabs } from "./CourseLabs";
import { UserContext } from "../../UserContext";
import { Typography } from "@mui/material";

export const CoursesRoutes = () => {
    const [courses, setCourses] = useState(null)
    const userContext = useContext(UserContext);

    useEffect(() => {
        fetch('/api/courses/').then(response => {
            if (response.ok)
                return response.json()
            else
                // @TODO обработка ошибки
                alert('Произошла ошибка при загрузке курсов. Попробуйте снова')
        }).then((data) => setCourses(data))
    }, [])

    return (
        <>
            {userContext.user
                ? (
                    <>
                        {courses &&
                            <Routes>
                                <Route path="/" element={<Courses courses={courses} />} />
                                <Route path=":id/*" element={<CourseLabs courses={courses} />} />
                            </Routes>
                        }
                    </>
                )
                : (
                    <Typography>
                        <Link to='/login/'>Войдите </Link>
                        в свой аккаунт чтобы посмотреть курсы
                    </Typography>
                )
            }
        </>
    )
}