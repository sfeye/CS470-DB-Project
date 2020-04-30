import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import moment from 'moment';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(userid, firstname, lastname, isbn, author, bookname, checkout_date) {
  return { userid, firstname, lastname, isbn, author, bookname, checkout_date};
}

function createRows(user){
  var tempRows= [];
  if (user){
    for (var i = 0; i< user.length; i++){
      tempRows.push(createData(
        user[i].userid,
        user[i].firstname,
        user[i].lastname,
        user[i].isbn,
        user[i].author,
        user[i].bookname,
        moment(user[i].checkout_date).format("MM/DD/YYYY")
      ));
    }
  }
  return tempRows;
}

export default function SimpleTable() {
  const classes = useStyles();
  const user = useSelector((state) => state.fetchResultsReducer.items[0])
  const rows = createRows(user);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">ISBN</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Check Out Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.userid}
              </TableCell>
              <TableCell align="center">{row.firstname}</TableCell>
              <TableCell align="center">{row.lastname}</TableCell>
              <TableCell align="center">{row.isbn}</TableCell>
              <TableCell align="center">{row.bookname}</TableCell>
              <TableCell align="center">{row.author}</TableCell>
              <TableCell align="center">{row.checkout_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}