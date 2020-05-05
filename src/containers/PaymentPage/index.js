import React from "react";
import { Grid, makeStyles, Card, Typography, Button, TextField, LinearProgress } from "@material-ui/core";
import Layout from "../../components/Layout";
import { payIcon } from "./constants";
import { useHistory, useLocation } from "react-router-dom";
const useStyle = makeStyles((theme) => ({
  root: {
    margin: 10,
  },
  content: {
    padding: 15,
  },
  item: {
    marginBottom: 15,
  },
  icon: {
    marginTop: 3,
    marginLeft: 5,
    marginRight: 5,
    height: 16,
    width: 24,
  },
}));
function PaymentPage() {
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const hotel = location.state.hotel;
  const order = location.state.order;
  const roomPeople = location.state.roomPeople;
  const contact = location.state.contact;
  const totalPrice = location.state.price;
  const handleClick = () => {
    history.push("/detail/hotel/order/pay/done");
  };
  return (
    <Layout title="支付訂單">
      <Grid container direction="row">
        <Grid item xs={7} className={classes.root}>
          <Card className={classes.content}>
            <Grid container direction="column" style={{ height: 400 }}>
              <Typography variant="h6" className={classes.item}>
                信用卡
              </Typography>
              <Grid item container direction="row">
                <Typography variant="subtitle2">接受：</Typography>
                {payIcon.map((payico, index) => (
                  <img key={index} src={payico} alt={index} className={classes.icon} />
                ))}
              </Grid>
              <TextField
                label="信用卡號碼"
                type="number"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
              <TextField
                label="CSV"
                type="number"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Grid container justify="center" alignContent="center" style={{ height: 170 }}>
                <Button variant="outlined" style={{ height: 60, width: 80 }} onClick={handleClick}>
                  <Typography variant="subtitle1">付款</Typography>
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4} className={classes.root}>
          <Card className={classes.content}>
            <Grid item container direction="row" justify="space-between" alignItems="center" className={classes.item}>
              <Typography variant="subtitle2">網上預繳</Typography>
              <Typography variant="h6">HK$ {totalPrice}</Typography>
            </Grid>
            <Grid item container direction="column" className={classes.item}>
              <Typography variant="h6">{hotel.titleChi}</Typography>
              <Typography variant="caption">城市景觀客房</Typography>
            </Grid>
            <Grid item container direction="row" className={classes.item}>
              <Grid item xs={6} container direction="column">
                <Typography variant="h6">{order.startDate}</Typography>
                <Typography variant="caption">入住日期</Typography>
              </Grid>
              <Grid item xs={6} container direction="column">
                <Typography variant="h6">{order.endDate}</Typography>
                <Typography variant="caption">退房日期</Typography>
              </Grid>
            </Grid>
            <Grid item container direction="row" className={classes.item}>
              <Grid item xs={6}>
                <Typography variant="subtitle2">房間 {order.room}間</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle2">共住 {order.day}晚</Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" className={classes.item}>
              <Typography variant="h6" style={{ marginBottom: 10 }}>
                聯絡資料
              </Typography>
              <Typography variant="subtitle2" style={{ marginBottom: 5 }}>
                電郵 : {contact.email}
              </Typography>
              <Typography variant="subtitle2">電話號碼 : {contact.mobile}</Typography>
            </Grid>
            <Grid item container direction="column" className={classes.item}>
              <Typography variant="h6" style={{ marginBottom: 10 }}>
                住客資料
              </Typography>
              {roomPeople.map((r) => (
                <Typography key={r.lastName} variant="subtitle2" style={{ marginBottom: 5 }}>
                  姓名 : {r.lastName} {r.firstName}
                </Typography>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

PaymentPage.propTypes = {};

export default PaymentPage;
