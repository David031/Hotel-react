import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Layout from '../../components/Layout';
import { BlockLoading } from 'react-loadingg';
import DoughnutCard from '../../components/DoughnutCard';
import PieCard from '../../components/PieCard';

const useStyles = makeStyles({
  root: {
    color: "#F6F7FB"
  },
});
function Dashboard() {
  const classes = useStyles();
  return (
    <Layout >
      <Grid container >

      </Grid>
    </Layout>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
