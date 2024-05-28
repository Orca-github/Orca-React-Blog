import React, { useState,useRef } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import servicePath from '../config/apiUrl';
import TypeId_List from './TypeId_List';
import { useDispatch } from 'react-redux';
import { findListReducer } from '../redux/store';

export default function ArticleSearch() {

  // const [searchQuery, setSearchQuery] = useState('');
  const [showList, setShowList] = useState(false)
  const inputRef = useRef(null);

  const dispatch = useDispatch();



  const handleSearch = async () => {
    event.preventDefault();
    try {
      const searchQuery = inputRef.current.value;
      console.log("hello",searchQuery)

      dispatch(findListReducer(`${servicePath.getListByDetail}${searchQuery}`));
      setShowList(true)

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };


  return (
    
    < Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '40%', mb: 4 }}
        onSubmit={handleSearch}
      >

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search article title or content"
          // value={searchQuery}
          inputRef={inputRef}
          // onChange={(event) => setSearchQuery(event.target.value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" 
        // onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>

      </Paper>


      {showList && (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center',paddingBottom:"3rem" }}>
          <Box sx={{ width: '80%' }}>
            <TypeId_List />
          </Box>
        </Box>
      )}
    </Box>
  )
}
