import { useState, useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getActivities, deleteActivity } from "../../databaseMock/actions";

function createData(activity, type, participants) {
  return { activity, type, participants };
}

const rows = [
  createData('Loading...', 'Loading...', 'Loading...'),
];

export default function ActTable() {

  const [data, setData] = useState(
    [
      {
        activity: "Loading...",
        type: "Loading...",
        participants: 'Loading...',
      },
    ]
  );
  const userEmail = JSON.parse(window.localStorage.user).email

  const mockFetchData = async() => {
    const newData =getActivities(userEmail).activities;
    setData(newData);
    window.localStorage.setItem('activities', JSON.stringify(newData));
  }
  
  useEffect(() => {
    mockFetchData();
  }, []);

  function removeActivity(event) {
    const ans = deleteActivity(userEmail, event);
    const newData = ans.activities;
    setData(newData);
    window.localStorage.setItem('activities', JSON.stringify(newData));
  }



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
          {data.map((activity) => (
            <TableRow
              key={activity.activity}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{activity.activity}</TableCell>
              <TableCell align="center">{activity.type}</TableCell>
              <TableCell align="center">{activity.participants}</TableCell>
              <TableCell align="center" padding="checkbox">
                <Button 
                  variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  sx={{marginLeft:'0rem', marginRight:'3rem'}}
                  onClick={() => removeActivity(activity.activity)}
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