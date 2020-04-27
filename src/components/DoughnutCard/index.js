import React from 'react';
import { makeStyles, Card, Grid, Divider, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

const useStyles = makeStyles({
  root: {
    width: 290,
    height: 350,
    margin: 8,
  },
  card: {
    marginTop: 18,
    marginBottom: 18,
  },
  cardTitle: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 32,
    scrollMarginRight: 32,
    fontSize: 18,
    color: '#5C6168'
  }
});

const data = {
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
    ]
  }],
  labels: [
    'Finished',
    'NotFinish',
    'Pending'
  ],
};
const legendOpts = {
  position: 'bottom',

};
function DoughnutCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container direction='column'>
        <Typography variant='subtitle1' className={classes.cardTitle}>Status </Typography>
        <Divider />
        <div className={classes.card}>
          <Doughnut
            data={data}
            height={250}
            options={{ maintainAspectRatio: false }}
            legend={legendOpts}
          />
        </div>
      </Grid>
    </Card>
  );
}

DoughnutCard.propTypes = {};

export default DoughnutCard;
