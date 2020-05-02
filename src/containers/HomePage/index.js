import React from 'react';
import Typography from '@material-ui/core/Typography';
import ImageButtonBase from "../../components/ImageButtonBase";
import Layout from '../../components/Layout';
import { Grid } from "@material-ui/core";
import { BlockLoading } from 'react-loadingg';
import { images } from "./constants";
import { useHistory } from 'react-router-dom';
function HomePage() {
  const history = useHistory();
  const handleClick = (newValue) => (event) => {
    history.push('/detail', { imagekey: newValue });
  };
  return (
    <Layout title='區域選擇'>
      <Grid container justify='center'>
        {images.map((image) => <ImageButtonBase key={image.key} image={image} handleClick={handleClick(image.key)} />)}
      </Grid>
    </Layout>
  );
}

HomePage.propTypes = {};

export default HomePage;
