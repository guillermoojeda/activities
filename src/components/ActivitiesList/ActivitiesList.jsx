import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from "../../shared_components/Card";
import ActTable from './ActTable';

//import "./UserDetails.css"


export default function ActivitiesList(){

  const btnStyle = {
    fontSize:'1.1rem',
    margin: '1rem',
    width: '10rem'
  }

  return(
    <Paper
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      sx={{ borderRadius:'16px', padding:'0.3rem' }}
    >
      <Typography
        className="cardTitle"
        variant="h4"
        color="inherit"
      >
        Activities To Do
      </Typography>
      <Divider />
      <Box sx={{padding:'1rem'}}>
        <br/>
        <ActTable></ActTable>
        <br/>
      </Box>
    </Paper>
  )
}