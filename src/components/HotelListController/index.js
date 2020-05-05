import React from "react";
import clsx from "clsx";
import { makeStyles, Card, CardContent, Typography, Grid, CardActions, Button } from "@material-ui/core";
import { starLv } from "./constants";
import HotelListCollapse from "../HotelListCollapse";
import { useHistory } from "react-router-dom";
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

function HotelListController({ hotels, sethotel, setDistrict, districts, district }) {
  const classes = useStyle();
  const history = useHistory();
  const handleClick = (newDistrict) => (event) => {
    setDistrict(newDistrict);
    const x = hotels.filter((h) => h.district === newDistrict);

    console.log("district", x);
    sethotel(x);
  };
  const handleStarClick = (newStar) => (event) => {
    const x = hotels.filter((h) => h.star === newStar && h.district == district);
    console.log("star", x);
    sethotel(x);
  };
  return (
    <Card className={classes.root}>
      <Grid container direction="column" style={{ padding: 15 }}>
        <HotelListCollapse title="地區選擇">
          {districts.map((d) => (
            <Button variant="outlined" onClick={handleClick(d.key)} key={d.key} style={{ margin: 3 }}>
              <Typography paragraph style={{ margin: 5 }}>
                {d.key}
              </Typography>
            </Button>
          ))}
        </HotelListCollapse>
        <HotelListCollapse title="篩選">
          <HotelListCollapse title="星級">
            {starLv.map((d) => (
              <Button variant="outlined" onClick={handleStarClick(d.value)} key={d.key} style={{ margin: 3 }}>
                <Typography key={d.key} paragraph style={{ margin: 5 }}>
                  {d.key}
                </Typography>
              </Button>
            ))}
          </HotelListCollapse>
        </HotelListCollapse>
      </Grid>
    </Card>
  );
}
export default HotelListController;
