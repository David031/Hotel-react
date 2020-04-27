import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../../components/Layout';
import { BlockLoading } from 'react-loadingg';

function TaskPage() {

  return (
    <Layout title='Task'>
      <BlockLoading color="#3781F7" />
    </Layout>
  );
}

TaskPage.propTypes = {};

export default TaskPage;
