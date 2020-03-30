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

function createData(ISBN, bookname, author, shelf_number, checkout_indicator) {
  return { ISBN, bookname, author, shelf_number, checkout_indicator };
}

function isAvailable(checkout_indicator) {
  if(checkout_indicator === 0) {
    return "Available";
  } else if (checkout_indicator === 1) {
    return "Not Available";
  }
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
  const books = useSelector((state) => state.fetchResultsReducer.items);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ISBN</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="center">Shelf Number</TableCell>
            <TableCell align="center">Is available?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {books[0].isbn}
              </TableCell>
              <TableCell align="center">{books[0].bookname}</TableCell>
              <TableCell align="center">{books[0].author}</TableCell>
              <TableCell align="center">{books[0].shelf_number}</TableCell>
              <TableCell align="center">{isAvailable(books[0].checkout_indicator)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}