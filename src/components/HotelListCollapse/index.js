import React from "react";
import clsx from "clsx";
import { makeStyles, Typography, CardActions, IconButton, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyle = makeStyles((theme) => ({
  root: {
    width: 360,
    marginTop: 15,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function HotelListCollapse({ title, children }) {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyle();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <CardActions disableSpacing>
        <Typography>{title}</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit style={{ padding: 8 }}>
        {children}
      </Collapse>
    </div>
  );
}
export default HotelListCollapse;
