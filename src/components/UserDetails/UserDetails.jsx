// import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
// import { styled } from '@mui/material/styles';
// import { useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDeepCompareEffect } from '@fuse/hooks';
// import LoadingSpinner from '@fuse/core/FuseLoading';
import Avatar from '@mui/material/Avatar';
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



export default function UserDetails(){

  const userData= {
    nombre: 'Guillermo',
    edad: '37'
  }

  return(
    <div>
      <Paper
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
        sx={{
          borderRadius:'16px',
        }}
        className="rounded-0 shadow-none lg:rounded-16 lg:shadow lg:rtl:pl-4 w-full"
      >
        <div className="m-24 items-center">
          <Typography
            className="m-24 md:px-16 text-24 md:text-20 font-semibold tracking-tight"
            variant="h4"
            color="inherit"
            sx={{fontSize: '24px'}}
          >
            General Information
          </Typography>
        </div>

        <Divider />

        <Typography className="m-16" sx={{fontSize: '16px'}}>
          <h2 className="font-semibold mt-8">Nombre</h2>
          <p>
            {userData?.nombre === ''
              ? 'Cargando datos...'
              : userData?.nombre}
          </p>
          <h2 className="font-semibold mt-8">Edad</h2>
          <p>{userData?.edad}</p>
        </Typography>
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

