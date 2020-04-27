import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../../components/Layout';
import { BlockLoading } from 'react-loadingg';

function ArticlePage() {

  return (
    <Layout title='Article'>
      <BlockLoading color="#3781F7" />
    </Layout>
  );
}

ArticlePage.propTypes = {};

export default ArticlePage;
