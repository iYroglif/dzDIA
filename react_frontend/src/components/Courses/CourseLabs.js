import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Accordion, AccordionSummary, AccordionDetails, Button, Box } from "@mui/material";
import { UserContext } from "../../UserContext";
import { courseLabsURL } from "../../api/urls";

export const CourseLabs = ({ courses }) => {
  const [courseLabs, setCourseLabs] = useState();
  const params = useParams();
  const userContext = useContext(UserContext);

  const currentCourse = params.id ? courses.find((item) => item.id === Number(params.id)) : -1;

  useEffect(() => {
    fetch(`${courseLabsURL}/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // @TODO обработка ошибки
        else {
          alert("Произошла ошибка при загрузке лабораторных работ. Попробуйте снова");
        }
      })
      .then((data) => setCourseLabs(data));
  }, [params.id]);

  return (
    <>
      {currentCourse !== -1 ? (
        <>
          <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
            {currentCourse.name}
          </Typography>

          <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
            Лабораторные работы:
          </Typography>

          {courseLabs && (
            <>
              {courseLabs.map((lab) => (
                <Accordion key={lab.id}>
                  <AccordionSummary>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h4">
                        {lab.name}
                      </Typography>
                    </Box>

                    <Button
                      component={Link}
                      to={userContext.user.student ? `/labs/${lab.id}` : userContext.user.lecturer && `/lab-groups/${lab.id}`}
                    >
                      Перейти
                    </Button>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography variant="body1">{lab.task}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </>
          )}
        </>
      ) : (
        <Typography>Курс не найден</Typography>
      )}
    </>
  );
};
