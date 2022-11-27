import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";

export const LabGroups = () => {
  const [courseLab, setCourseLab] = useState("");
  const [groups, setGroups] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/course-lab/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setCourseLab(data));
  }, [params.id]);

  useEffect(() => {
    fetch(`/api/lab-groups/${params.id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const map = new Map();

        data.forEach((lab) => {
          let status;

          if (lab.completed === null) {
            status = "Не выполнена";
          } else if (lab.completed.split(".")[0] >= lab.changed.split(".")[0]) {
            status = "Не проверена";
          } else if (lab.completed.split(".")[0] < lab.changed.split(".")[0]) {
            status = "Проверена";
          }

          if (!map.has(lab.student.group.id)) {
            map.set(lab.student.group.id, {
              id: lab.student.group.id,
              name: lab.student.group.name,
              students: [
                {
                  first_name: lab.student.user.first_name,
                  last_name: lab.student.user.last_name,
                  patronymic: lab.student.patronymic,
                  lab_id: lab.id,
                  status: status,
                },
              ],
            });
          } else {
            map.get(lab.student.group.id).students.push({
              first_name: lab.student.user.first_name,
              last_name: lab.student.user.last_name,
              patronymic: lab.student.patronymic,
              lab_id: lab.id,
              status: status,
            });
          }
        });

        setGroups([...map.values()]);
      });
  }, [params.id]);

  return (
    <>
      <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
        Лабораторная работа: {courseLab.name}
      </Typography>

      <Typography variant="h5" component="h3" sx={{ mb: 3 }}>
        Группы:
      </Typography>

      {groups.map((group) => (
        <Accordion key={group.id}>
          <AccordionSummary>
            <Typography variant="h6" component="h4">
              Группа {group.name}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography variant="body1">Студенты:</Typography>
            <List>
              <Divider component="li" />

              {group.students.map((student) => (
                <div key={student.lab_id}>
                  <ListItem>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body1">
                        {student.last_name} {student.first_name}{" "}
                        {student.patronymic}
                      </Typography>
                    </Box>

                    <Typography variant="body2">{student.status}</Typography>

                    <Button component={Link} to={`/labs/${student.lab_id}`}>
                      Перейти
                    </Button>
                  </ListItem>
                  <Divider component="li" />
                </div>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
