import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from "../../shared_components/Card"
import "./UserDetails.css"


export default function UserDetails(){

  const userData= {
    name: 'Guillermo',
    age: '37'
  }

  const btnStyle = {
    fontSize:'1.1rem',
    margin: '0.8rem',
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
        General Information
      </Typography>

      <Divider />

      <Box sx={{padding:'1rem'}}>
        <Typography variant="h5" color="inherit" sx={{fontWeight: 'bold'}}>
          Name
        </Typography>
      
        <Typography variant="h6" color="inherit">
          {userData?.name === ''
            ? 'Cargando datos...'
            : userData?.name}
        </Typography>
        <br/>
        <Typography
          variant="h5"
          color="inherit"
          sx={{fontWeight: 'bold'}}
        >
          Age
        </Typography>
        <Typography
          variant="h6"
          color="inherit"
        >
          {userData?.age === ''
            ? 'Cargando datos...'
            : userData?.age}
        </Typography>
      </Box>
      <Typography
        className="cardTitle2"
        variant="h4"
        color="inherit"
      >
        Activity Information
      </Typography>
      <Divider />

      <Box className="lowerHalf">

        <Card></Card>
        <Box className="buttonsContainer">
          <Button className="OptionBtn" size="large" variant="contained" sx={btnStyle}>Add to List</Button>
          <Button className="OptionBtn" size="large" variant="contained" sx={btnStyle}>Refresh</Button>
        </Box>
      </Box>
    </Paper>
  )
}

