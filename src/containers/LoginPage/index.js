import React from 'react';
import { Typography, Container, TextField, Grid, Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import { useHistory } from 'react-router-dom';
const spacing = 10;
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    background: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    background: '#FFFFFF',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 500,
    width: 400,
  },
  title: {
    margin: 48,
    textAlign: 'center'
  },
  subTitle: {
    marginBottom: 32,
  },
  fieldGrid: {
    margin: 5,
  },
  field: {
    width: 300,
  },
  icon: {
    marginRight: 15,
  },
  button: {
    height: 50,
    width: 300,
    margin: 30
  },
  text: {
    color: "#5F6F7B",
  },
  footer: {
    color: "#5F6F7B",
    textAlign: 'center',
    fontSize: 12,
  }
}));

export default function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  const handleChange = (event) => {
    history.push('/home');
  };
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h5' className={classes.title}>
          Easy Hotel
        </Typography>
        <Card className={classes.login} maxWidth='xs'>
          <Typography variant='h6' className={classes.subTitle}>
            Login to your account
          </Typography>
          <Grid container alignItems="center" justify='center' className={classes.fieldGrid}>
            <Grid item>
              <AccountCircleIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <TextField required label="Username" variant="outlined" className={classes.field} />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify='center' className={classes.fieldGrid}>
            <Grid item>
              <LockIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <TextField required label="Password" variant="outlined" type="password" className={classes.field} />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleChange}>
            Login
          </Button>
          <Typography variant='subtitle' className={classes.text} >
            ForgetPassword?
          </Typography>
          <Typography variant='subtitle' className={classes.text} style={{ padding: 8 }}>
            Please contact our support.
          </Typography>
        </Card>
        <Typography variant='h6' className={classes.footer} style={{ paddingTop: 8 }}>
          Copyright © 2020 Easy Hotel.
        </Typography>
        <Typography variant='h6' className={classes.footer} >
          All rights reserved.
        </Typography>
      </div>
    </div>
  );
}