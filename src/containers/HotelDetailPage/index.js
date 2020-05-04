import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Grid, makeStyles, Card, Typography, Button, TextField } from "@material-ui/core";
import muiDayjs from "@date-io/dayjs";
import dayjs from "dayjs";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useLocation } from "react-router-dom";
import HotelRoomCard from "../../components/HotelRoomCard";
import { heatFacility, network, customerService, mealService, normalFacility, reminder } from "./constants";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import empirePrestigeTsimShaTsuiView1 from "../../images/tsim-sha-tsui/hotel-images/empire-prestige-tsim-sha-tsui/view1.jpg";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn: {
    marginTop: 15,
  },
  picker: {
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#F1F2F5",
  },
  roomList: {
    color: "#8C96A7",
  },
  service: {
    marginBottom: 25,
  },
  serviceLabelTitle: {
    marginBottom: 15,
  },
  serviceLabel: {
    marginRight: 15,
    paddingBottom: 25,
  },
  reminder: {
    marginBottom: 15,
  },
  policyTag: {
    marginTop: 16,
    marginBottom: 32,
  },
}));

function HotelDetailPage() {
  const now = dayjs();
  const [startDate, setStartDate] = useState(now);
  const [endDate, setEndDate] = useState(startDate.add(1, "day"));
  const classes = useStyle();
  const location = useLocation();
  const district = location.state.district;
  const hotel = location.state.hotel;
  const onChange = (event) => {
    console.log(startDate);
    console.log(event);
  };
  return (
    <Layout title={`酒店 : ${district} - ${hotel.titleChi}`}>
      <Card className={classes.root}>
        <Grid container direction="row" className={classes.content}>
          <Grid item xs={11} container direction="column" alignContent="flex-start" alignItems="flex-start" justify="flex-start">
            <Typography variant="h6" style={{ marginTop: 10 }}>
              {hotel.titleChi} - {hotel.titleEn}
            </Typography>
            <Typography variant="subtitle1">{hotel.address}</Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h5" style={{ marginTop: 10 }}>
              HK$258
            </Typography>
            <Button variant="outlined" className={classes.btn}>
              立即訂房
            </Button>
          </Grid>
        </Grid>
        <Grid container className={classes.content} justify="center">
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
          <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" style={{ margin: 5 }} />
        </Grid>
        <Grid container direction="row" className={classes.content} style={{ height: 350 }}>
          <Grid item xs={8} container direction="column" alignContent="flex-start" alignItems="flex-start" justify="flex-start">
            <Grid item style={{ height: 150 }}>
              <Typography variant="h6">酒店評價</Typography>
            </Grid>
            <Grid item style={{ height: 150 }}>
              <Typography variant="h6">熱門設施</Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">酒店地圖</Typography>
          </Grid>
        </Grid>
        <Grid className={classes.content}>
          <Grid container className={classes.picker}>
            <MuiPickersUtilsProvider utils={muiDayjs}>
              <DatePicker disablePast disableToolbar variant="inline" margin="normal" format="DD/MM/YYYY" label="入住日期" value={startDate} onChange={setStartDate} />
              <Typography style={{ margin: 25 }}>{endDate.diff(startDate, "d")}晚</Typography>
              <DatePicker disablePast disableToolbar variant="inline" format="DD/MM/YYYY" margin="normal" label="退房日期" value={endDate} onChange={setEndDate} />
            </MuiPickersUtilsProvider>
            <TextField
              label="人數"
              type="number"
              defaultValue={1}
              margin="normal"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ paddingLeft: 10 }}
            />
            <TextField
              label="房間數量"
              type="number"
              margin="normal"
              defaultValue={1}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ paddingLeft: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.content}>
          <Grid item xs={3}>
            <Typography variant="subtitle1" className={classes.roomList}>
              房間類型
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" className={classes.roomList}>
              床型 / 設施
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" className={classes.roomList}>
              政策
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" className={classes.roomList}>
              每晚平均房價
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.content}>
          <Grid item xs={3}>
            <img src={empirePrestigeTsimShaTsuiView1} alt="empirePrestigeTsimShaTsuiView1" width="90%" />
            <Typography style={{ marginTop: 15 }}>城市景觀客房</Typography>
          </Grid>
          <Grid item container direction="column" xs={9}>
            <HotelRoomCard />
            <HotelRoomCard />
          </Grid>
        </Grid>
        <Grid container className={classes.content} style={{ height: 500 }}>
          <Typography variant="h6">酒店簡介</Typography>
        </Grid>
        <Grid container className={classes.content} alignContent="flex-start">
          <Typography variant="h6" className={classes.serviceLabelTitle}>
            服務/設施
          </Typography>

          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">熱門設施</Typography>
            </Grid>
            <Grid item xs={3}>
              {heatFacility.map((f, index) =>
                index < 5 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.4em" className={classes.serviceLabel} fontSize="small" />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Grid item xs={3}>
              {heatFacility.map((f, index) =>
                index < 10 && index > 4 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.4em" className={classes.serviceLabel} fontSize="small" />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Grid item xs={3}>
              {heatFacility.map((f, index) =>
                index > 9 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.4em" className={classes.serviceLabel} fontSize="small" />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">網絡</Typography>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="row">
                <network.icon size="1.3em" className={classes.serviceLabel} />
                <Typography variant="subtitle2">{network.label}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">櫃檯服務</Typography>
            </Grid>
            <Grid item xs={3}>
              {customerService.map((f, index) =>
                index < 4 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Grid item xs={3}>
              {customerService.map((f, index) =>
                index < 8 && index > 3 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Grid item xs={3}>
              {customerService.map((f, index) =>
                index > 7 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">餐飲膳食</Typography>
            </Grid>
            <Grid item xs={3}>
              {mealService.map((f, index) =>
                index < 4 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Grid item xs={3}>
              {mealService.map((f, index) =>
                index < 8 && index > 3 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Grid item xs={3}>
              {mealService.map((f, index) =>
                index > 7 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">一般設施</Typography>
            </Grid>
            <Grid item xs={3}>
              {normalFacility.map((f, index) =>
                index < 4 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Grid item xs={3}>
              {normalFacility.map((f, index) =>
                index < 8 && index > 3 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Grid item xs={3}>
              {normalFacility.map((f, index) =>
                index > 7 ? (
                  <Grid key={f.label} container direction="row">
                    <f.icon size="1.3em" className={classes.serviceLabel} />
                    <Typography variant="subtitle2">{f.label}</Typography>
                  </Grid>
                ) : null
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.content}>
          <Typography variant="h6" className={classes.serviceLabelTitle}>
            預訂須知
          </Typography>
          {reminder.map((r) => (
            <Grid key={r.title} container direction="row" className={classes.service}>
              <Grid item xs={3}>
                <Typography variant="subtitle2">{r.title}</Typography>
              </Grid>
              <Grid container direction="column" item xs={9}>
                {r.content.map((c) => (
                  <Typography key={c} variant="subtitle2" className={classes.reminder}>
                    {c}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid container className={classes.content}>
          <Typography variant="h6" className={classes.serviceLabelTitle}>
            酒店政策
          </Typography>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">入住及退房</Typography>
            </Grid>
            <Grid container direction="row" item xs={9}>
              <Typography variant="subtitle2" style={{ paddingRight: 90 }}>
                入住時間 15:00後
              </Typography>
              <Typography variant="subtitle2">退房時間 12:00前</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">小童及加床</Typography>
            </Grid>
            <Grid container direction="column" item xs={9}>
              <Typography variant="subtitle2" className={classes.reminder}>
                酒店允許旅客攜同小童入住
              </Typography>
              <Typography variant="subtitle2">- 使用現有床鋪</Typography>
              <Typography variant="subtitle2" className={classes.reminder}>
                每房間可有1名11歲或以下的小童使用現有床鋪。
              </Typography>
              <Grid container direction="row">
                <Grid item xs={4} container direction="column">
                  <Typography variant="caption" className={classes.policyTag}>
                    2歲或以下的小童
                  </Typography>
                  <Typography variant="caption" className={classes.policyTag}>
                    3-11歲的小童
                  </Typography>
                  <Typography variant="caption" className={classes.policyTag}>
                    3-11歲的小童
                  </Typography>
                </Grid>
                <Grid item xs={4} container direction="column">
                  <Typography variant="caption" className={classes.policyTag}>
                    早餐 - 包括
                  </Typography>
                  <Typography variant="caption" className={classes.policyTag}>
                    早餐 - 不包括
                  </Typography>
                  <Typography variant="caption" className={classes.policyTag}>
                    早餐 - 包括
                  </Typography>
                </Grid>
                <Grid item xs={4} container direction="column">
                  <Typography variant="caption" className={classes.policyTag}>
                    費用 - 免費
                  </Typography>
                  <Typography variant="caption" className={classes.policyTag}>
                    費用 - 免費
                  </Typography>
                  <Typography variant="caption" className={classes.policyTag}>
                    費用 - 每人每晚收取房價HK$108.00
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="subtitle2">- 加床</Typography>
              <Typography variant="subtitle2">酒店可提供加嬰兒床</Typography>
              <Typography variant="subtitle2" className={classes.reminder}>
                每房間最多可加床1張
              </Typography>
              <Grid container direction="row">
                <Grid item xs={4} className={classes.policyTag}>
                  <Typography variant="caption">11歲或以下的小童</Typography>
                </Grid>
                <Grid item xs={4} className={classes.policyTag}>
                  <Typography variant="caption">早餐 - 不包括</Typography>
                </Grid>
                <Grid item xs={4} className={classes.policyTag}>
                  <Typography variant="caption">費用 - 每人每晚收取房價HK$440.00</Typography>
                </Grid>
              </Grid>
              <Typography variant="subtitle2">- 備註</Typography>
              <Typography variant="subtitle2" className={classes.reminder}>
                (1) 11歲以上的客人一律按照成人標準100%收費 (2) 不接受18歲以下客人在無監護人陪同的情況下入住 (3) 如第三位客人(12歲或以上)或多於一位小童入住，將收取每位HKD250附加費(不設加床及不含早餐)，費用以每位及每天計算，額外產生之費用需於前台現付
                ***衹適用於全新優越客房***
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">早餐</Typography>
            </Grid>
            <Grid container direction="column" item xs={9}>
              <Grid container direction="row" item className={classes.reminder}>
                <Typography variant="subtitle2" style={{ paddingRight: 90 }}>
                  早餐形式
                </Typography>
                <Typography variant="subtitle2">單點</Typography>
              </Grid>
              <Grid container direction="row" item className={classes.reminder}>
                <Typography variant="subtitle2" style={{ paddingRight: 120 }}>
                  費用
                </Typography>
                <Typography variant="subtitle2">HK$141.00 /人</Typography>
              </Grid>
              <Grid container direction="row" item className={classes.reminder}>
                <Typography variant="subtitle2" style={{ paddingRight: 90 }}>
                  營業時間
                </Typography>
                <Typography variant="subtitle2">07:00-10:30 [星期一 - 星期日]</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">寵物</Typography>
            </Grid>
            <Grid container direction="row" item xs={9}>
              <Typography variant="subtitle2">不可攜帶寵物。</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" className={classes.service}>
            <Grid item xs={3}>
              <Typography variant="subtitle2">酒店付款方式</Typography>
            </Grid>
            <Grid container direction="column" item xs={9}>
              <Typography variant="subtitle2">酒店接受以下付款方式</Typography>
              <Grid container>
                <RiVisaLine size="2.8em" style={{ marginRight: 20 }} />
                <FaCcMastercard size="2.8em" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.content} style={{ height: 500 }}>
          <Typography variant="h6">地圖</Typography>
        </Grid>
        <Grid container className={classes.content} style={{ height: 500 }}>
          <Typography variant="h6">評價</Typography>
        </Grid>
      </Card>
    </Layout>
  );
}

HotelDetailPage.propTypes = {};

export default HotelDetailPage;
