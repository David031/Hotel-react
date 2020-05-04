import React from 'react';
import { Typography, Container, Divider, Grid, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
const useStyles = makeStyles((theme) => ({
  topBar: {
    width: '100%',
    height: 120,
    background: '#FFFFFF',
    color: 'black',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  navBar: {
    paddingTop: 4,
    width: '100%',
    height: 55,
    background: '#FFFFFF',
    color: 'black',
    direction: 'row',
  },
  appBar: {
    width: '100%',
    height: 64,
    background: '#FFFFFF',
    color: 'black',
    direction: 'row'
  },
  divider: {
    width: '100%',
  },
  tabNormal: {
    width: 160,
    height: 48,
    color: 'gery',
  },

  tabSelected: {
    width: 160,
    height: 48,
    borderBottom: ' 1px solid rgb(0, 0, 255)',
  },
  normalColor: {
    color: '#5F6F7B'
  },
  appTitle: {
    width: 160,
    height: 48,
    color: 'gery',
    margin: 8,
  },
}));

export default function TopBar({ handleChange }) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (newValue) => (event) => {
    history.push('/detail/hotel', { hotel: newValue.hotel, district: newValue.district });
  };
  return (
    <Grid container className={classes.topBar} direction='column'>
      <Container >
        <Grid container direction='row' className={classes.appBar} justify='space-between'>
          <Button className={classes.appTitle} onClick={handleChange('Home')}>
            <Typography variant='h6' >
              Easy Hotel
            </Typography>
          </Button>
          <Button startIcon={<Avatar />} onClick={handleChange('Account')}>
            <Grid container direction='column' alignItems='flex-start'>
              <Typography component="span" variant='button' color="inherit" >
                Guest
              </Typography>
              <Typography component="span" variant='caption' color="inherit" >
                遊客
              </Typography>
            </Grid>
          </Button>
        </Grid>
      </Container>
      <Divider className={classes.divider} />
      <Container className={classes.navBar}>
        <Grid container direction='row' justify='center'>
          <Typography variant='subtitle1' style={{ margin: 10 }}> 最新推廣 ： 香港半島酒店消費滿HKD 10000，立減HKD 10 ～～</Typography>
          <Button
            onClick={handleClick({ hotel: { titleChi: '香港半島酒店' }, district: '中西區' })}
            className={classes.tabNormal}
            endIcon={<ArrowRightIcon />}
          >立即預定</Button>
        </Grid>
      </Container>
    </Grid >
  );
}