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

function createData(ISBN, bookname, author, shelf_number, checkout_indicator) {
  return { ISBN, bookname, author, shelf_number, checkout_indicator };
}

const rows = [
  createData(1234567890, "Frankenstein", "Mary Shelly", 1, 0),
  createData(2345678901, "Catch-22", "Joesph Heller", 3, 0),
  createData(3456789012, "Dracula", "Bram Stoker", 1, 0),
  createData(4567890123, "Oliver Twist", "Charles Dickenson", 4, 0),
  createData(5678901234, "Animal Farm", "George Orwell", 2, 0),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ISBN</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Shelf Number</TableCell>
            <TableCell align="right">Is available?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.ISBN}
              </TableCell>
              <TableCell align="right">{row.bookname}</TableCell>
              <TableCell align="right">{row.author}</TableCell>
              <TableCell align="right">{row.shelf_number}</TableCell>
              <TableCell align="right">{row.checkout_indicator}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}