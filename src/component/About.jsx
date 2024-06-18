import React from 'react'
import "../static/pages/about.css"
import { Avatar, Box, Typography, Grid, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import DyTag from './DyTag.jsx';

import TagCloud from './test';

import NewTag from './newTag.jsx';

export default function About() {
  return (
    <Box sx={{ padding: '20px' }}>
      

      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>

      <div className='author-div'>
        <div className='author-img'><Avatar alt="Remy Sharp" src="/MyAvatar.jpg" sx={{ width: 100, height: 100 }} /></div>
        <div className='author-intro'>
          所有被风吹过的树都显得有神
        </div>
      </div>

        <Typography variant="h4" gutterBottom>About me</Typography>
        <Typography variant="body1" paragraph>
          Hi there! I'm Songhong Li, a software developer who
          loves to explore and innovate. While I may not be a tech guru, I thrive on trying new
          things and challenging myself. This blog is a reflection of my journey, sprinkled with a bit of
          my personality and life philosophy.
        </Typography>

        <Typography variant="body1" paragraph>
          One of my favorite books is Philosophical Reflections by Gu Cheng. A line that particularly resonates with me is:
          "All trees touched by the wind seem divine."
          This speaks to the beauty in everyday experiences and the subtle magic in the world around us.
          It’s a reminder to find wonder and inspiration in the simplest of things.
        </Typography>

        <Divider sx={{margin:"3%"}} />

        <Typography variant="h4" gutterBottom>Technical Journey</Typography>
        <Typography variant="body1" paragraph>
          Languages & Tools: Python, JavaScript, HTML/CSS, C++, React, SQL, Git, AWS, and many more.
          Frameworks & Libraries: PyQt6, Express, Flask, PyTorch.
          Methodologies: Agile, Scrum, CI/CD.
        </Typography>
        <Divider  sx={{margin:"3%"}} />
        {/* <Typography variant="h4" gutterBottom>Beyond the Code</Typography>
        <Typography variant="body1" paragraph>
          Life isn't just about code. It's also about the moments that make us smile and the people we share them with.
          When I'm not coding, you might find me lost in a book, hiking,
          or experimenting with new recipes in the kitchen.
          I believe in a balanced life where work and play coexist harmoniously.
        </Typography> */}
        {/* <Divider   sx={{margin:"3%"}}/> */}
        <Typography variant="h4" gutterBottom>About the Blog</Typography>
        <Typography variant="body1" paragraph>
          This blog isn’t just a portfolio; it’s a canvas where I share my thoughts, learnings,
          and a bit of my quirky sense of humor.
          So, welcome to my world. Feel free to explore, get inspired, and maybe even laugh a little.
        </Typography>
        <Divider   sx={{margin:"3%"}}/>

        <Typography variant="body1" paragraph>
          Thanks for stopping by! Keep coding, keep exploring, and remember:
          The wind. 🌳💨
        </Typography>

        <Divider   sx={{margin:"3%"}}/>

        <Typography variant="h4" gutterBottom>Contact</Typography>



      </Paper>





    </Box>
  )
}
