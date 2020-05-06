import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    background: "#F5F7FB",
  },
  btnBack: {
    width: 160,
    height: 48,
    color: "gery",
    margin: 10,
  },
  header: {
    margin: 20,
    color: "#6C6C6C",
  },
  subHeader: {
    color: "#4A5057",
  },
}));

export default function NotFoundPage() {
  const classes = useStyles();
  const history = useHistory();
  const handleBackToHome = (event) => {
    history.push("/Hotel-react/home");
  };
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
        <Typography variant="h1" className={classes.header}>
          404
        </Typography>
        <Typography variant="h6" className={classes.subHeader}>
          咦~頁面不見了~
        </Typography>
        <Typography variant="subtitle1" className={classes.subHeader}>
          請核對您輸入的頁面地址是否正確哦~
        </Typography>
        <Button className={classes.btnBack} endIcon={<ArrowRightIcon />} onClick={handleBackToHome}>
          返回主頁
        </Button>
      </Grid>
    </div>
  );
}
