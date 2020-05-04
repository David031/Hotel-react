import React from "react";
import Layout from "../../components/Layout";
import HotelCard from "../../components/HotelCard";
import HotelListController from "../../components/HotelListController";
import { Grid, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import empirePrestigeTsimShaTsuiView1 from "../../images/tsim-sha-tsui/hotel-images/empire-prestige-tsim-sha-tsui/view1.jpg";

const useStyle = makeStyles((theme) => ({
  root: {},
}));
const hotel = {
  image: empirePrestigeTsimShaTsuiView1,
  titleChi: "香港皇悦卓越酒店(尖沙咀店) ",
  titleEn: "Empire Prestige Tsim Sha Tsui",
  address: "尖沙咀-油尖旺尖沙咀金巴利街8號。 ",
  price: 700,
};
function DetailPage() {
  const classes = useStyle();
  const location = useLocation();
  const district = location.state.imagekey;
  return (
    <Layout title={`酒店選擇 : ${district}`}>
      <Grid
        container
        alignContent="flex-start"
        alignItems="flex-start"
        justify="space-around"
      >
        <Grid item>
          <HotelCard district={district} hotel={hotel} />
        </Grid>
        <Grid>
          <HotelListController />
        </Grid>
      </Grid>
    </Layout>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
