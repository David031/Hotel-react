import React from 'react';
import clsx from 'clsx';
import { makeStyles, Card, CardContent, Typography, Grid, CardActions, Button } from "@material-ui/core";
import { district, starLv, roomSize, activitys } from "./constants";
import HotelListCollapse from '../HotelListCollapse';
import { useHistory } from 'react-router-dom';
const useStyle = makeStyles((theme) => ({
  root: {
    width: 360,
    marginTop: 15
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function HotelListController({ handleFilter }) {
  const classes = useStyle();
  const history = useHistory();
  const handleClick = (newValue) => (event) => {
    history.push('/detail', { imagekey: newValue });
  };
  return (
    <Card className={classes.root}>
      <Grid container direction='column' style={{ padding: 15 }}>
        <HotelListCollapse title='地區選擇'>
          {district.map((d) =>
            <Button variant="outlined" onClick={handleClick(d.key)} key={d.key} style={{ margin: 3 }}>
              <Typography paragraph style={{ margin: 5 }}>
                {d.key}
              </Typography>
            </Button>
          )}
        </HotelListCollapse>
        <HotelListCollapse title='篩選'>
          <HotelListCollapse title='星級'>
            {starLv.map((d) => <Typography key={d.key} paragraph>{d.key}</Typography>)}
          </HotelListCollapse>
          <HotelListCollapse title='房型'>
            {roomSize.map((d) => <Typography key={d.key} paragraph>{d.key}</Typography>)}
          </HotelListCollapse>
          <HotelListCollapse title='娛樂設施'>
            {activitys.map((d) => <Typography key={d.key} paragraph>{d.key}</Typography>)}
          </HotelListCollapse>
        </HotelListCollapse>
      </Grid>
    </Card>
  );
}
export default HotelListController;