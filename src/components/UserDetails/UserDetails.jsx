import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Card from "../../shared_components/Card"
import "./UserDetails.css"
import { addActivity } from "../../databaseMock/actions";
import { useDispatch, useSelector } from 'react-redux';

export default function UserDetails(){

  const [isLoading, setIsLoading] = useState(false);
  const [activity, setActivity] = useState({
    activity: "Loading activity...",
    type: "Loading...",
    participants: 0,
    price: 0,
    link: "Loading...",
    key: "Loading...",
    accessibility: "Loading..."
  });

  const dispatch = useDispatch();

  const { user } = useSelector(state => state)

  const userData = JSON.parse(window.localStorage.user);

  const refresh = async() => {
    setIsLoading(true);
    fetch('https://www.boredapi.com/api/activity')
    .then((response) => response.json())
    .then((newActivity) => {
      setActivity(newActivity);
      setIsLoading(false);
    })
  }

  useEffect(() => {
    refresh();
    setIsLoading(false);
  }, [dispatch])

  function addToList() {
    const loggedUser = JSON.parse(window.localStorage.user);
    if (loggedUser) {
      const userEmail = loggedUser.email;
      const newActivities = addActivity(userEmail, activity).activitiesUpdated;
      window.localStorage.setItem('activities', JSON.stringify(newActivities));
    } else {
      console.log('Error: no usermail on session data found')
      // console.log left here for simulation purposes only
    }
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

        <Card {...activity}></Card>
        <Box className="buttonsContainer">
          <Button 
            className="OptionBtn"
            size="large"
            variant="contained"
            sx={btnStyle}
            onClick={addToList}
          >
            Add to List
          </Button>
          <Button 
            className="OptionBtn"
            size="large"
            variant="contained"
            sx={btnStyle}
            onClick={refresh}
          >
            Refresh
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}

