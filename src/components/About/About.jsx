import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

export default function About() {
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
        About this project
      </Typography>

      <Divider />
      <Typography variant="body1" color="inherit" sx={{margin:'1rem'}}>
        Hi all! This is a small project where you are supposed to add
        things to to to your list of Activities to do. In the section
        "Home", a random activity is taken 
        from <a href='http://www.boredapi.com'>The Bored API</a>. You can then
        Add this activity  by clicking the button "Add to List" or erquesting for
        another Random activity. <br/>
        In the section "Activities to Do", you will find the list of your activities to do.
        From here, you can choose to remove each of your activities.<br/>
        In the current version, there is not a "real" database. Instead, it was mocked
        using a javascript literal object in a .js file. When you connect to a session,
        this file stores the information of your activities, in the same way a database would do,
        excep that the information will not persist if you close your browser: in that
        case the user data of any user created will be lost, as well as any activity 
        added to his/her list.
        Also, in the current version, the session information in the frontend side is stored in the browser´s
        LocalStorage AND Redux Store. Of course In a commmercial project I would only use one of these, I
        but this is a demonstrative project, I only wanted to show that I can handle either of those.  <br/>
        The project was implemented this way because of time constraints, however I plan
        to add better functionalities such as Redux or Signal, and make use of a proper
        library to mock the back-end system and its database.<br/>
        Frameworks and Libraries: React, MUI, React-router-dom, framer-motion, formik, yup.
        <br/>
        Thank you for visiting, and have a good day!
        <br/>
        Best,
        <br/>
        Guillermo.
        

      </Typography>
    </ Paper>
  )
}