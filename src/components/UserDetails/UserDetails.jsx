// import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
// import { styled } from '@mui/material/styles';
// import { useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDeepCompareEffect } from '@fuse/hooks';
// import LoadingSpinner from '@fuse/core/FuseLoading';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// import Icon from '@mui/material/Icon';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { useDispatch, useSelector } from 'react-redux';

// import Carita from 'app/shared-components/Carita/Carita';
// import { nFormatter } from 'app/shared-components/helpers/nFormatter';

// import { getUserData } from './store/miPerfilSlice';

// import { selectUserData } from './store/miPerfilSlice';

// import withReducer from 'app/store/withReducer';
// import reducer from './store/miPerfilSlice';

// import SmallSimsApp from './lista_simulaciones/SmallSimsApp';

import Card from "../../shared_components/Card"
import "./UserDetails.css"



export default function UserDetails(){

  const userData= {
    name: 'Guillermo',
    age: '37'
  }

  return(
    <div>
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        sx={{
          borderRadius:'16px',
          padding:'0.3rem'
        }}
        className="rounded-0 shadow-none lg:rounded-16 lg:shadow lg:rtl:pl-4 w-full"
      >

        <Typography
          variant="h4"
          color="inherit"
          sx={{margin:"1rem"}}
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

        <Divider />

        <Box className="lowerHalf">

          <Card></Card>
          <Box className="buttonsContainer"></Box>


        </Box>

      </Paper>       
              {/* <div className="flex flex-center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mx-auto mt-16"s
                  aria-label="PROFILE_IMAGE"
                  // disabled={_.isEmpty(dirtyFields) || !isValid}
                  value="legacy"
                >
                  <Link
                    to="/pages/nuevafoto"
                    style={{ color: '#FFF', textDecoration: 'none' }}
                    underline="none"
                  >
                    {' '}
                    {t('PROFILE_IMAGE')}{' '}
                  </Link>
                </Button>
              </div> */}
    </div>
  )
}

