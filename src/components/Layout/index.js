import React from "react";
import PropTypes from "prop-types";
import { Typography, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TopBar from "../TopBar";
import BottomBar from "../BottomBar";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    background: "#F5F7FB",
  },
  topBar: {
    width: "100%",
    height: 120,
    background: "#FFFFFF",
    color: "black",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  tabbar: {
    width: "100%",
    height: 55,
    background: "#FFFFFF",
    color: "black",
  },
  appBar: {
    width: "100%",
    height: 64,
    background: "#FFFFFF",
    color: "black",
  },
  divider: {
    width: "100%",
  },
  subHeader: {
    margin: 24,
  },
  actions: {
    marginTop: 15,
  },
}));

function Layout({ children, title }) {
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (newValue) => (event) => {
    switch (newValue) {
      case "Home":
        history.push("/Hotel-react/home");
        break;
      case "Account":
        history.push("/Hotel-react/login");
        break;
      default:
        break;
    }
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <TopBar handleChange={handleChange} />
        <Container>
          <Typography variant="h6" className={classes.subHeader}>
            {title}
          </Typography>
        </Container>
        <Container className={classes.content}>{children}</Container>
        <BottomBar />
      </Grid>
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Layout;
