import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));
export default function HotelRoomCard() {
  const classes = useStyles();
  return (
    <Grid style={{ paddingTop: 5, paddingBottom: 5 }}>
      <Grid item container direction="row" style={{ height: 190 }}>
        <Grid item xs={4}>
          <Typography>1張雙人床 或 2張單人床</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>特價房型！無法取消</Typography>
        </Grid>
        <Grid item container xs={4}>
          <Grid item xs={6}>
            <Typography>HK$ 200</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined">網上預定</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
