
// FullScreen.jsx
import React from 'react';
// import { useSelector, useDispatch} from 'react-redux';
import { Box, Typography, Container } from '@mui/material';
import MainPage from '../main_page';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { changeBackgroundAsync, backReducer } from '../../redux/store';

const FullScreen = () => {
  const backgroundImage = useSelector(state => state.back.backgroundImage);

  const dispatch = useDispatch();

  const handleChange = () => {
    // dispatch(backReducer('/MyAvatar.jpg'))
    dispatch(changeBackgroundAsync({ imageUrl: '/MyAvatar.jpg', delay: 500 }));
  }

  return (
    <>
      <Box sx={{ position: 'relative', overflow: 'hidden'}}>
        <Container sx={{ position: 'relative', zIndex: 1, 
         backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        padding: '24px', borderRadius: '8px' }}>

          <MainPage />
        </Container>

      </Box>

    </>
  );
};

export default FullScreen;