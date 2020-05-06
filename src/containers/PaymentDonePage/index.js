import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Layout from "../../components/Layout";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    background: "#F5F7FB",
  },
  btnBack: {
    width: 100,
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
function PaymentDonePage() {
  const classes = useStyles();
  const history = useHistory();
  const handleBackToHome = () => {
    history.push("/home");
  };
  return (
    <Layout title="支付成功">
      <Grid container justify="center" alignItems="center" alignContent="center" className={classes.root}>
        <Grid item container justify="center" direction="column" alignItems="center" alignContent="center">
          <Typography variant="h6" className={classes.header} style={{ width: 500 }}>
            訂單編號： f5669f07-2b89-409b-9c17-9e6e2303d350
          </Typography>
          <Typography variant="h1" className={classes.header} style={{ width: 400 }}>
            支付完成
          </Typography>
          <Typography variant="h6" className={classes.subHeader} style={{ width: 170 }}>
            祝你旅途愉快～～
          </Typography>
          <Button className={classes.btnBack} endIcon={<ArrowRightIcon />} onClick={handleBackToHome}>
            返回主頁
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
}

PaymentDonePage.propTypes = {};

export default PaymentDonePage;
