import React from 'react';
import { Typography, Container, Divider, Grid, Button, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import BookIcon from "@material-ui/icons/Book";
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
    color: 'gery'
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
    padding: 16
  },
}));
export default function TopBar({ handleChange, value }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.topBar} direction='column'>
      <Container >
        <Grid container direction='row' className={classes.appBar} justify='space-between'>
          <Typography variant='h6' className={classes.appTitle}>TF Admin</Typography>
          <Button startIcon={<Avatar />} onClick={handleChange('Account')}>
            <Grid container direction='column' alignItems='flex-start'>
              <Typography component="span" variant='button' color="inherit" >
                David Tsang
              </Typography>
              <Typography component="span" variant='caption' color="inherit" >
                Teacher
              </Typography>
            </Grid>
          </Button>
        </Grid>
      </Container>
      <Divider className={classes.divider} />
      <Container className={classes.navBar}>
        <Button
          className={value === 'Dashboard' ? classes.tabSelected : classes.tabNormal}
          startIcon={<DashboardIcon className={value === 'Dashboard' ? null : classes.normalColor} />}
          onClick={handleChange('Dashboard')}
        >
          <Typography variant='button' className={value === 'Dashboard' ? null : classes.normalColor}>
            Dashboard
          </Typography>
        </Button>
        <Button
          className={value === 'Article' ? classes.tabSelected : classes.tabNormal}
          startIcon={<BookIcon className={value === 'Article' ? null : classes.normalColor} />}
          onClick={handleChange('Article')}
        >
          <Typography variant='button' className={value === 'Article' ? null : classes.normalColor}>
            Article
          </Typography>
        </Button>
        <Button
          className={value === 'Task' ? classes.tabSelected : classes.tabNormal}
          startIcon={<WorkIcon className={value === 'Task' ? null : classes.normalColor} />}
          onClick={handleChange('Task')}
        >
          <Typography variant='button' className={value === 'Task' ? null : classes.normalColor}>
            Task
          </Typography>
        </Button>
        <Button
          className={value === 'User' ? classes.tabSelected : classes.tabNormal}
          startIcon={<PeopleIcon className={value === 'User' ? null : classes.normalColor} />}
          onClick={handleChange('User')}
        >
          <Typography variant='button' className={value === 'User' ? null : classes.normalColor}>
            User
          </Typography>
        </Button>
      </Container>
    </Grid >
  );
}