import { Typography, ListItem, ListItemText, Button, Link } from "@mui/material";
import React from "react";
import { downloadURL } from "../../api/urls";

export const ReportRow = React.forwardRef(({ labId, labReport, isStudent, handleUploadFile }, inputFile) => {
  return (
    <ListItem>
      <ListItemText>
        <Typography>
          Отчет:
          <Link href={`${downloadURL}/${labId}`}> {labReport}</Link>
        </Typography>

        {isStudent && (
          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Загрузить
            <input hidden accept=".pdf" type="file" ref={inputFile} onChange={handleUploadFile} />
          </Button>
        )}
      </ListItemText>
    </ListItem>
  );
});
