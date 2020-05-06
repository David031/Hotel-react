import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: { marginBottom: 10 },
}));
export default function HotelRoomCard({ handleClick, price, roomKey }) {
  const classes = useStyles();
  return (
    <Grid style={{ paddingTop: 5, paddingBottom: 5 }}>
      <Grid item container direction="row" style={{ height: 190 }}>
        <Grid item xs={4}>
          <Typography className={classes.item}>1張雙人床 或 2張單人床</Typography>
          {roomKey ? <Typography className={classes.item}>1份早餐</Typography> : <Typography className={classes.item}>2份早餐</Typography>}
          <Typography className={classes.item}>禁煙</Typography>
          <Typography className={classes.item}>有窗</Typography>
        </Grid>
        <Grid item xs={4}>
          {roomKey ? <Typography className={classes.item}>特價房型！無法取消</Typography> : <Typography className={classes.item}>不設退款</Typography>}
          <Typography className={classes.item}>即時確認</Typography>
        </Grid>
        <Grid item container xs={4}>
          <Grid item xs={6}>
            <Typography>HK$ {price}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" onClick={handleClick}>
              網上預定
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
