import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

function createData(ISBN, bookname, author, checkout_date, checkin_date) {
  return { ISBN, bookname, author, checkout_date,  checkin_date};
}

const rows = [
  createData(1234567890, "Frankenstein", "Mary Shelly", "04.10.2020", "04.17.2020"),
  createData(2345678901, "Catch-22", "Joesph Heller", "04.10.2020", "04.17.2020"),
  createData(3456789012, "Dracula", "Bram Stoker", "04.00.2020", "04.21.2020"),
  createData(4567890123, "Oliver Twist", "Charles Dickenson", "04.11.2020", "04.18.2020"),
  createData(5678901234, "Animal Farm", "George Orwell", "04.20.2020", "04.27.2020"),
];

export default function SimpleTable() {
  const classes = useStyles();

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