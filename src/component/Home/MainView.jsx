import React from 'react'


import { Box, Typography, Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useSelector, useDispatch} from 'react-redux';

import { changeBackgroundAsync,backReducer } from '../../redux/store';

const MainView = () => {
  const backgroundImage = useSelector(state => state.back.backgroundImage);

  const dispatch = useDispatch();

const handleChange = ()=>{
  // dispatch(backReducer('/MyAvatar.jpg'))
  dispatch(changeBackgroundAsync({ imageUrl: '/MyAvatar.jpg', delay: 500 }));
}

  return (
    <>
        <Typography variant="h2" gutterBottom>
          Welcome to My Blog
        </Typography>
        <Button onClick={handleChange}>click change</Button>

        <Typography variant="h5">
          Explore the world through my eyes
        </Typography>
    </>
  );
};

export default MainView;