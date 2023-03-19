import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(activity, type, participants) {
  return { activity, type, participants };
}

const rows = [
  createData('Run', 'Sport', 1),
  createData('Cook', 'Food', 1),
  createData('Dinner', 'Food', 2),
  createData('Movie', 'Social', 1),
];

export default function ActTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 550 }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Activity</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Participants</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.activity}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.activity}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.participants}</TableCell>
              <TableCell align="center" padding="checkbox">
                <Button 
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  sx={{marginLeft:'0rem', marginRight:'3rem'}}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}