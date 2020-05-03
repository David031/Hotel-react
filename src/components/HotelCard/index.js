import React from 'react';
import { makeStyles, Card, Button, Typography, Grid, CardMedia } from "@material-ui/core";
import empirePrestigeTsimShaTsuiView1 from "../../images/tsim-sha-tsui/hotel-images/empire-prestige-tsim-sha-tsui/view1.jpg";

const data = {
  image: empirePrestigeTsimShaTsuiView1,
  titleChi: '香港皇悦卓越酒店(尖沙咀店) ',
  titleEn: 'Empire Prestige Tsim Sha Tsui ',
  address: '尖沙咀-油尖旺尖沙咀金巴利街8號。 ',
  price: 700,
}

const useStyle = makeStyles((theme) => ({
  root: {
    height: 300,
    width: 820,
    margin: 15
  },
  image: {
    height: 270,
    width: 250,
    marginRight: 15
  },
  content: {
    marginRight: 'auto',
    marginBottom: 'auto',
  },
  price: {
    marginLeft: 'auto',
  },
  infoBtn: {
    marginTop: 200,
    marginLeft: 70,
  }
}));

function HotelCard() {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <Grid container direction='row' style={{ padding: 15 }}>
        <CardMedia
          className={classes.image}
          image={data.image}
          title={data.title}
        />
        <Grid item className={classes.content}>
          <Typography variant='h6'>
            {data.titleChi}
          </Typography>
          <Typography variant='subtitle1'>
            {data.titleEn}
          </Typography>
          <Typography variant='caption'>
            {data.address}
          </Typography>
        </Grid>
        <Grid item className={classes.price}>


          <Grid container direction='row' alignItems='flex-end'>

            <Typography variant='h6'>
              價格 :  HKD {data.price}
            </Typography>
            <Typography variant='caption' style={{ margin: 4 }}>
              起
            </Typography>
          </Grid>

          <Button variant='outlined' className={classes.infoBtn}>
            查看詳情
          </Button>
        </Grid>

      </Grid>
    </Card>
  );
}
export default HotelCard;