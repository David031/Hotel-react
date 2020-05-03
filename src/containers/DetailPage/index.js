import React from 'react';
import Layout from '../../components/Layout';
import HotelCard from '../../components/HotelCard';
import HotelListController from '../../components/HotelListController';
import { Grid, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {

  }
}));

function DetailPage() {
  const classes = useStyle();
  const location = useLocation();
  const district = location.state.imagekey;
  return (
    <Layout title={`酒店選擇 : ${district}`}>
      <Grid container alignContent='flex-start' alignItems='flex-start' justify='space-around' >
        <Grid item>
          <HotelCard />
          <HotelCard />
          <HotelCard />
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
