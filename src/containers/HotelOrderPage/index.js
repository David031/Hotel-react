import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Card, TextField } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import Layout from "../../components/Layout";
import { orderReminder } from "./constants";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 15,
  },
  content: {
    padding: 10,
  },
  text: {
    marginTop: 5,
  },
  pay: {
    padding: 30,
  },
  payBtn: {
    height: 60,
    width: 100,
  },
}));

export default function HotelOrderPage() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const district = location.state.district;
  const hotel = location.state.hotel;
  const order = location.state.order;
  const totalRoomPrice = order.room * order.price * order.day;
  const subPrice = totalRoomPrice + totalRoomPrice * 0.1;
  const discount = hotel.titleChi === "半島酒店" && subPrice > 10000 ? 10 : 0;
  const totalPrice = subPrice - discount;
  if (!district || !hotel || !order) {
    history.push("/Hotel-react/error");
  }
  var rows = [];
  for (let index = 0; index < order.people; index++) {
    rows.push(index);
  }
  const [roomPeople, setRoomPeople] = React.useState(rows.map((r) => ({ lastName: "", firstName: "" })));
  const [contact, setContact] = React.useState({ email: "", mobile: "" });
  const handleClick = () => {
    history.push("/Hotel-react/detail/hotel/order/pay", { order: order, price: totalPrice, hotel: hotel, contact: contact, roomPeople: roomPeople });
  };
  const handleLastNameChange = (index) => (event) => {
    setRoomPeople(
      roomPeople.map((r, i) => {
        if (i === index) {
          return { ...r, lastName: event.target.value };
        } else {
          return r;
        }
      })
    );
  };
  const handleFirstNameChange = (index) => (event) => {
    setRoomPeople(
      roomPeople.map((r, i) => {
        if (i === index) {
          return { ...r, firstName: event.target.value };
        } else {
          return r;
        }
      })
    );
  };
  const handleEmailChange = (event) => {
    setContact({ ...contact, email: event.target.value });
  };
  const handleMobileChange = (event) => {
    setContact({ ...contact, mobile: event.target.value });
  };
  return (
    <Layout title={`預定酒店 : ${district} - ${hotel.titleChi}`}>
      <Grid container direction="row">
        <Grid item xs={8} className={classes.root}>
          <Card className={classes.root}>
            <Grid container direction="column">
              <Grid item className={classes.root}>
                <Typography variant="h6" style={{ marginBottom: 15 }}>
                  預訂須知
                </Typography>
                {orderReminder.map((r) => (
                  <Grid key={r.content} container direction="row">
                    <r.icon size="1.3em" />
                    <Typography variant="subtitle2" style={{ marginBottom: 15, marginLeft: 10 }}>
                      {r.content}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Grid item className={classes.root}>
                <Typography variant="h6">住客資料</Typography>
                <Typography variant="caption">入住旅客姓名必須與證件上顯示的一致</Typography>
                <Typography variant="subtitle1" style={{ paddingTop: 15 }}>
                  住客
                </Typography>
                {rows.map((r) => (
                  <Grid key={r} container direction="row">
                    <TextField
                      label="姓氏"
                      type="text"
                      margin="normal"
                      value={roomPeople[r].lastName}
                      onChange={handleLastNameChange(r)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                    <TextField
                      label="名字"
                      type="text"
                      margin="normal"
                      value={roomPeople[r].firstName}
                      onChange={handleFirstNameChange(r)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid item className={classes.root}>
                <Typography variant="h6" style={{ marginBottom: 15 }}>
                  聯絡資料
                </Typography>
                <TextField
                  label="電郵"
                  type="email"
                  margin="normal"
                  value={contact.email}
                  onChange={handleEmailChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ paddingLeft: 10, paddingRight: 10 }}
                />
                <TextField
                  label="電話號碼"
                  type="mobile"
                  margin="normal"
                  onChange={handleMobileChange}
                  value={contact.mobile}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ paddingLeft: 10, paddingRight: 10 }}
                />
              </Grid>
              <Grid item className={classes.root} container direction="column">
                <Typography variant="h6" style={{ marginBottom: 15 }}>
                  到達時間
                </Typography>
                <Typography variant="subtitle1">最早入住時間為 21:00。若提早到達有可能需要等候。</Typography>
                <Typography variant="subtitle1">此房間可被預留至 {order.startDate}，00:00。限期後，酒店可能取消訂單。</Typography>
              </Grid>
              <Grid item className={classes.root}>
                <Grid item container direction="row" alignItems="center">
                  <Typography variant="h6">特別要求</Typography>
                  <Typography variant="caption">（選填）</Typography>
                </Grid>
                <Typography variant="subtitle2">我們會將您的需求轉達給酒店，但我們無法確保酒店能夠滿足。</Typography>
                <TextField
                  label="特別要求"
                  type="text"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item className={classes.pay} container direction="row" alignItems="center" justify="space-between">
                <Grid item container direction="row" xs={4} alignItems="center">
                  <Typography variant="subtitle2">網上預付</Typography>
                  <Typography variant="h5">HK${totalPrice}</Typography>
                </Grid>
                <Button variant="outlined" className={classes.payBtn} onClick={handleClick}>
                  <Typography variant="h6">預訂</Typography>
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={4} className={classes.root}>
          <Card className={classes.root}>
            <Grid container direction="column">
              <Grid container item direction="row">
                <Grid item xs={4} style={{ padding: 10 }}>
                  <img src={hotel.images[0]} alt="hotel" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={8} style={{ padding: 10 }}>
                  <Typography variant="subtitle1">{hotel.titleChi}</Typography>
                  <Typography variant="caption">{hotel.address}</Typography>
                </Grid>
              </Grid>
              <Grid container item direction="row" alignItems="center">
                <Grid item xs={4} style={{ padding: 10 }}>
                  <Typography variant="caption">入住日期</Typography>
                  <Typography variant="caption">{order.startDate}</Typography>
                </Grid>
                <Grid item xs={4} style={{ padding: 10 }}>
                  <Typography variant="caption">退房日期</Typography>
                  <Typography variant="caption">{order.endDate}</Typography>
                </Grid>
                <Grid item xs={4} style={{ padding: 10 }}>
                  <Typography variant="caption">{order.day}晚</Typography>
                </Grid>
              </Grid>
              <Grid container item direction="column" className={classes.content}>
                <Typography>城市景觀客房</Typography>
                <Typography variant="caption" className={classes.text}>
                  {order.people}位成人
                </Typography>
                <Typography variant="caption" className={classes.text}>
                  17平方米
                </Typography>
                <Typography variant="caption" className={classes.text}>
                  6-15樓層
                </Typography>
                <Typography variant="caption" className={classes.text}>
                  有窗
                </Typography>
                <Typography variant="caption" className={classes.text}>
                  免費 Wi-Fi
                </Typography>
                <Typography variant="caption" className={classes.text}>
                  1張雙人床 或 2張單人床
                </Typography>
                <Typography variant="caption" className={classes.text}>
                  {order.people}份早餐
                </Typography>
                <Typography variant="caption" className={classes.text}>
                  禁煙
                </Typography>
              </Grid>
              <Grid container item direction="column" className={classes.content}>
                <Grid item container direction="row" justify="space-between">
                  <Typography variant="caption" className={classes.text}>
                    {order.room}間 x {order.day} 晚
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    HK${totalRoomPrice}
                  </Typography>
                </Grid>
                <Grid item container direction="row" justify="space-between">
                  <Typography variant="caption" className={classes.text}>
                    稅項及附加費
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    HK${totalRoomPrice * 0.1}
                  </Typography>
                </Grid>
                <Grid item container direction="row" justify="space-between">
                  <Typography variant="caption" className={classes.text}>
                    折扣
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    HK${discount}
                  </Typography>
                </Grid>
                <Grid item container direction="row" justify="space-between">
                  <Typography variant="h6" className={classes.text}>
                    應付總額
                  </Typography>
                  <Typography variant="h6" className={classes.text}>
                    HK${totalPrice}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item direction="column" className={classes.content}>
                <Grid item>
                  <Typography variant="subtitle2" className={classes.text}>
                    不設退款
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    訂單確認後不可取消或更改。若您沒有入住，將收取全額房費HK${totalPrice}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" className={classes.text}>
                    付款方式
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    預訂此房間需於網上預付 HK${totalPrice}，入住時無需付款。
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2" className={classes.text}>
                    收據
                  </Typography>
                  <Typography variant="caption" className={classes.text}>
                    訂單確認後，您可在訂單詳情頁面中查看電子收據。
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
