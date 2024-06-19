import React from 'react'
import { ReactTyped } from "react-typed";

import { Box, Typography, Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useSelector, useDispatch} from 'react-redux';

import { changeBackgroundAsync,backReducer } from '../../redux/store';

//打字机效果 使用的是 react-typed 这个库
const TypedEffect = () => {
  return (
    <ReactTyped
      strings={[
        "所有被风吹过的树都显得有神..........",
        "Sharing my thoughts and experiences.",
        "Stay tuned for more updates."
      ]}
      typeSpeed={100}
      backSpeed={50}
      loop
    />
  );
};

const MainView = () => {
  const backgroundImage = useSelector(state => state.back.backgroundImage);

  const dispatch = useDispatch();

const handleChange = ()=>{
  // dispatch(backReducer('/MyAvatar.jpg'))
  dispatch(changeBackgroundAsync({ imageUrl: '/MyAvatar.jpg', delay: 500 }));
}

  return (
    <>
        <Typography variant="h3" gutterBottom>
          Welcome to My Blog
        </Typography>
        <Button onClick={handleChange}>click change</Button>

        <Typography variant="h5">
        <TypedEffect />
        </Typography>
    </>
  );
};

export default MainView;