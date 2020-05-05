import React from "react";
import Layout from "../../components/Layout";
import HotelCard from "../../components/HotelCard";
import HotelListController from "../../components/HotelListController";
import { Grid, makeStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { hotels, districts } from "../../data";

const useStyle = makeStyles((theme) => ({
  root: {},
}));

function DetailPage() {
  const classes = useStyle();
  const location = useLocation();
  const history = useHistory();
  const [district, setDistrict] = React.useState(location.state.imagekey);
  const [hotel, sethotel] = React.useState(
    hotels.map((h) => {
      if (h.district == district) {
        return h;
      }
    })
  );

  return (
    <Layout title={`酒店選擇 : ${district}`}>
      <Grid container alignContent="flex-start" alignItems="flex-start" justify="space-around">
        <Grid item>{hotel[0] ? hotel.map((h) => (h ? <HotelCard district={district} hotel={h} /> : null)) : <HotelCard hotelNotFound />}</Grid>
        <Grid item>
          <HotelListController hotels={hotels} sethotel={sethotel} setDistrict={setDistrict} districts={districts} district={district} />
        </Grid>
      </Grid>
    </Layout>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
