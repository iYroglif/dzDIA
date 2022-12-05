import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Courses } from "./Courses";
import { CourseLabs } from "./CourseLabs";
import { Typography } from "@mui/material";
import { coursesURL } from "../../api/urls";

export const CoursesRoutes = () => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    fetch(coursesURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // @TODO обработка ошибки
        else {
          alert("Произошла ошибка при загрузке курсов. Попробуйте снова");
        }
      })
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      {courses ? (
        <Routes>
          <Route path="/" element={<Courses courses={courses} />} />
          <Route path=":id/*" element={<CourseLabs courses={courses} />} />
        </Routes>
      ) : (
        <Typography>Загрузка курсов...</Typography>
      )}
    </>
  );
};
