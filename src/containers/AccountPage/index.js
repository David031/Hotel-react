import React from 'react';
import { makeStyles } from '@material-ui/core';
import Layout from '../../components/Layout';
import { BlockLoading } from 'react-loadingg';

const useStyles = makeStyles({
  loading: {
    color: "#F6F7FB"
  },
});

function AccountPage() {
  const classes = useStyles();
  return (
    <Layout title='帳戶'>
      <BlockLoading />

    </Layout>
  );
}

AccountPage.propTypes = {};

export default AccountPage;
