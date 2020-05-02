import React from 'react';
import Typography from '@material-ui/core/Typography';
import ImageButtonBase from "../../components/ImageButtonBase";
import Layout from '../../components/Layout';
import { Grid } from "@material-ui/core";
import { BlockLoading } from 'react-loadingg';
import CentralAndWesternDistrictView1 from "../../Images/central-and-western-district/central-and-western-district-view-1.jpg";
const image = {
  url: CentralAndWesternDistrictView1,
  title: '中西區',
  width: '40%',
};
function HomePage() {

  return (
    <Layout title='Home'>
      <Grid container >
        <ImageButtonBase image={image} />
        <ImageButtonBase image={image} />
        <ImageButtonBase image={image} />

        <ImageButtonBase image={image} />
        <ImageButtonBase image={image} />
        <ImageButtonBase image={image} />
      </Grid>



    </Layout>
  );
}

HomePage.propTypes = {};

export default HomePage;
