import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Container, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import TopBar from '../TopBar';
import BottomBar from "../BottomBar";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ImportIcon from '@material-ui/icons/Publish';
import ExportIcon from '@material-ui/icons/GetApp';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    background: '#F5F7FB',
  },
  topBar: {
    width: '100%',
    height: 120,
    background: '#FFFFFF',
    color: 'black',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  tabbar: {
    width: '100%',
    height: 55,
    background: '#FFFFFF',
    color: 'black',
  },
  appBar: {
    width: '100%',
    height: 64,
    background: '#FFFFFF',
    color: 'black',
  },
  divider: {
    width: '100%',
  },
  subHeader: {
    margin: 24,
  },
  actions: {
    marginTop: 15,
  }
}));

function Layout({ children, title }) {
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (newValue) => (event) => {
    switch (newValue) {
      case 'Dashboard':
        history.push('/dashboard');
        break;
      case 'Article':
        history.push('/article');
        break;
      case 'Task':
        history.push('/task');
        break;
      case 'User':
        history.push('/user');
        break;
      case 'Account':
        history.push('/account');
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Grid container direction='column'>
        <TopBar handleChange={handleChange} value={title} />
        <Container >
          <Grid container direction='row' justify='space-between'>
            <Typography variant='h6' className={classes.subHeader}>
              {title}
            </Typography>
            {
              title !== 'Dashboard' && title !== 'Setting' ?
                <Grid item className={classes.actions} >
                  <IconButton >
                    <AddIcon />
                  </IconButton>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <ImportIcon />
                  </IconButton>
                  <IconButton >
                    <ExportIcon />
                  </IconButton>
                </Grid> : null
            }
          </Grid>
        </Container>
        <Container className={classes.content}>
          {children}
        </Container>
        <BottomBar />
      </Grid>
    </div >
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

export default Layout;
