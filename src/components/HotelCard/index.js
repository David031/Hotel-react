import React from "react";
import { makeStyles, Card, Button, Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { heatFacility } from "../../containers/HotelDetailPage/constants";
const useStyle = makeStyles((theme) => ({
  root: {
    height: 290,
    width: 820,
    margin: 15,
  },
  image: {
    height: 270,
    width: 250,
    marginRight: 15,
  },
  price: {
    marginLeft: "auto",
  },
  infoBtn: {
    marginTop: "63%",
    marginLeft: "53%",
  },
  serviceLabel: {
    marginRight: 15,
    paddingBottom: 10,
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
        <Grid item xs={4} style={{ height: 260 }}>
          <img alt="hotelImage" src={hotel.images[0]} style={{ width: "100%", height: "100%" }}></img>
        </Grid>
        <Grid item xs={5} style={{ paddingLeft: 15 }}>
          <Typography variant="h6">{hotel.titleChi}</Typography>
          <Typography variant="subtitle1">{hotel.titleEn}</Typography>
          <Typography variant="caption">{hotel.address}</Typography>
          <Grid style={{ marginTop: 20 }}>
            {heatFacility.map((f, index) =>
              index < 4 ? (
                <Grid key={f.label} container direction="row" style={{ width: 220 }}>
                  <f.icon size="1.4em" className={classes.serviceLabel} fontSize="small" />
                  <Typography variant="subtitle2">{f.label}</Typography>
                </Grid>
              ) : null
            )}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="row" alignItems="flex-end" justify="flex-end">
            <Typography variant="h6">HK$ {hotel.price}</Typography>
            <Typography variant="caption" style={{ margin: 4 }}>
              起
            </Typography>
          </Grid>
          <Grid item container direction="row" alignItems="flex-end" justify="flex-end" style={{ paddingTop: 25 }}>
            <Typography variant="h4">4.5</Typography>
            <Typography variant="h5">/5</Typography>
            <Typography variant="h6" style={{ paddingLeft: 10 }}>
              滿意
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
