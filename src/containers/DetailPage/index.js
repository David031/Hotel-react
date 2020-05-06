import React from "react";
import Layout from "../../components/Layout";
import HotelCard from "../../components/HotelCard";
import HotelListController from "../../components/HotelListController";
import { Grid } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { hotels, districts } from "../../data";

function DetailPage() {
  const location = useLocation();
  const [district, setDistrict] = React.useState(location.state.imagekey);
  const [hotel, sethotel] = React.useState(hotels.filter((h) => h.district === district));
  return (
    <Layout title={`酒店選擇 : ${district}`}>
      <Grid container alignContent="flex-start" alignItems="flex-start" justify="space-around">
        <Grid item>{hotel[0] ? hotel.map((h) => (h ? <HotelCard key={h.titleChi} district={district} hotel={h} /> : null)) : <HotelCard hotelNotFound />}</Grid>
        <Grid item>
          <HotelListController hotels={hotels} sethotel={sethotel} setDistrict={setDistrict} districts={districts} district={district} />
        </Grid>
      </Grid>
    </Layout>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
