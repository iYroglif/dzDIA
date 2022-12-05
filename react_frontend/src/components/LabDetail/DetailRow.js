import { Typography, ListItem, ListItemText } from "@mui/material";

export const DetailRow = ({ variant, component, text }) => {
  return (
    <ListItem>
      <ListItemText>
        <Typography variant={variant} component={component}>
          {text}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};
