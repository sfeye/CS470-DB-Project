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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(ISBN, bookname, author, checkout_date, checkin_date) {
  return { ISBN, bookname, author, checkout_date,  checkin_date};
}

function createRows(books){
  var tempRows= [];
  if (books){
    for (var i = 0; i< books.length; i++){
      tempRows.push(createData(
        books[i].isbn,
        books[i].bookname,
        books[i].author,
        books[i].shelf_number,
        books[i].checkout_indicator
      ));
    }
  }
  return tempRows;
}

export default function SimpleTable() {
  const classes = useStyles();
  const user = useSelector((state) => state.fetchResultsReducer.items)
  const rows = createRows(user);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ISBN</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Check Out Date</TableCell>
            <TableCell align="center">Check In Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.ISBN}
              </TableCell>
              <TableCell align="center">{row.bookname}</TableCell>
              <TableCell align="center">{row.author}</TableCell>
              <TableCell align="center">{row.checkout_date}</TableCell>
              <TableCell align="center">{row.checkin_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}