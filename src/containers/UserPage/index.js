import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../components/Layout';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, name, email, stuId, pendingTask, finishedTask) {
  return { id, name, email, stuId, pendingTask, finishedTask };
}

const rows = [
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
  createData('1effe88d-e836-4bc0-b62a-5abdc6e4981', 'David031', '123@gmail.com', '13085', '999', '999'),
];

function UserPage() {
  const classes = useStyles();
  return (
    <Layout title='User'>
      <TableContainer component={Paper}>
        <Table className={classes.table} >
          <TableHead>
            <TableRow>
              <TableCell >Id</TableCell>
              <TableCell >Name</TableCell>
              <TableCell >Email</TableCell>
              <TableCell >Student Id</TableCell>
              <TableCell>Pending Task</TableCell>
              <TableCell>Finished Task</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell >{row.id}</TableCell>
                <TableCell >{row.name}</TableCell>
                <TableCell >{row.email}</TableCell>
                <TableCell >{row.stuId}</TableCell>
                <TableCell >{row.pendingTask}</TableCell>
                <TableCell >{row.finishedTask}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

UserPage.propTypes = {};

export default UserPage;
