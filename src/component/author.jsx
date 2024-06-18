import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../static/components/author.css'

export default function Author() {
  return (
    <div  className='author-div'>
        <div className='author-img'><Avatar alt="Remy Sharp" src="/MyAvatar.jpg" sx={{ width: 100, height: 100 }} /></div>
        <div className='author-intro'>
            所有被风吹过的树都显得有神
        </div>
        <Divider>social media</Divider>
        <a href="https://github.com/Orca-github" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/songhong-li/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon/>
        </a>
    </div>
  )
}


