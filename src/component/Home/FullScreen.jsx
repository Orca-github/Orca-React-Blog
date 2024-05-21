// import React from 'react';
// import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
// import MainPage from '../main_page';

// const FullScreen = () => {
//   return (
//     <>
//       {/* Fullscreen Background with Text */}
//       <Box sx={{
//         height: '100vh', // Full viewport height
//         width: '100%', // Full width
//         backgroundImage: 'url("/back.jfif")', // Your background image
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff' // White text color
//       }}>
//         <Typography variant="h2" gutterBottom>
//           Welcome to My Blog
//         </Typography>
//         <Typography variant="h5">
//           Explore the world through my eyes
//         </Typography>
//       </Box>

//       {/* Post List */}
//       <Container maxWidth="md" sx={{ my: 2 }}>
//         <MainPage/>
//       </Container>
//     </>
//   );
// };

// export default FullScreen;

// FullScreen.jsx
import React from 'react';
// import { useSelector, useDispatch} from 'react-redux';
import { Box, Typography, Container } from '@mui/material';
import MainPage from '../main_page';
import Button from '@mui/material/Button';
import { useSelector, useDispatch} from 'react-redux';

import { changeBackgroundAsync,backReducer } from '../../redux/store';

const FullScreen = () => {
  const backgroundImage = useSelector(state => state.back.backgroundImage);

  const dispatch = useDispatch();

const handleChange = ()=>{
  // dispatch(backReducer('/MyAvatar.jpg'))
  dispatch(changeBackgroundAsync({ imageUrl: '/MyAvatar.jpg', delay: 500 }));
}

  return (
    <>
      {/* <Box sx={{
        // height: '100vh',
        // width: '100%',
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // color: '#fff'

        height: '80%', // Full viewport height
      backgroundImage: `url(${backgroundImage})`, // Your background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff' // White text color
      }}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Blog
        </Typography>
        <Button onClick={handleChange}>click change</Button>

        <Typography variant="h5">
          Explore the world through my eyes
        </Typography>
      </Box> */}
      <Container maxWidth="md">
        <MainPage/>
      </Container>
    </>
  );
};

export default FullScreen;