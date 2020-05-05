import React from "react";
import { makeStyles, Card, Button, Typography, Grid, CardMedia } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    height: 300,
    width: 820,
    margin: 15,
  },
  image: {
    height: 270,
    width: 250,
    marginRight: 15,
  },
  content: {
    marginRight: "auto",
    marginBottom: "auto",
  },
  price: {
    marginLeft: "auto",
  },
  infoBtn: {
    marginTop: 200,
    marginLeft: 20,
  },
}));

function HotelCard({ district, hotel, hotelNotFound }) {
  const classes = useStyle();
  const history = useHistory();
  const handleClick = () => {
    history.push("/detail/hotel", { hotel: hotel, district: district });
  };
  return !hotelNotFound ? (
    <Card className={classes.root}>
      <Grid container direction="row" style={{ padding: 15 }}>
        <CardMedia className={classes.image} image={hotel.images[0]} title={hotel.title} />
        <Grid item className={classes.content}>
          <Typography variant="h6">{hotel.titleChi}</Typography>
          <Typography variant="subtitle1">{hotel.titleEn}</Typography>
          <Typography variant="caption">{hotel.address}</Typography>
        </Grid>
        <Grid item className={classes.price}>
          <Grid container direction="row" alignItems="flex-end">
            <Typography variant="h6">HK$ {hotel.price}</Typography>
            <Typography variant="caption" style={{ margin: 4 }}>
              起
            </Typography>
          </Grid>
          <Button variant="outlined" className={classes.infoBtn} onClick={handleClick}>
            查看詳情
          </Button>
        </Grid>
      </Grid>
    </Card>
  ) : (
    <Card className={classes.root}>
      <Grid container justify="center" alignContent="center" alignItems="center" style={{ height: "100%" }}>
        <Typography variant="h5">沒有找到合適的酒店</Typography>
      </Grid>
    </Card>
  );
}
export default HotelCard;
