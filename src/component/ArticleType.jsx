import React, { useState, useEffect, useRef } from 'react'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import servicePath from '../config/apiUrl';
import axios from 'axios';
import ArticleList from './ArticleList';
import { useDispatch } from 'react-redux';
import { findListReducer } from '../redux/store';
import { CompareSharp } from '@mui/icons-material';
import "../static/components/typeBtn.css"

//面包导航
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(4),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    margin: "1%",
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }





export default function ArticleType() {

  const [breadC, setBreadC] = useState([])
  // const [searchQuery, setSearchQuery] = useState('');
  const [showList, setShowList] = useState(false)

  const dispatch = useDispatch();

  const handleClick = async (id) => {
    try {
      dispatch(findListReducer(`${servicePath.getListById}${id}`));
      setShowList(true)

    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  useEffect(() => {

    //获取类别
    const fetchData = async () => {
      try {
        const response = await axios.get(servicePath.getTypeInfo);
        // console.log('Response by typeid data:', response.data); // 打印响应数据
        setBreadC(response.data.data);
      } catch (error) {
        console.error('Print Error fetching data:', error);
        setBreadC([]);

      }
    };
    fetchData(); // 调用异步函数


  }, []); // 空数组作为第二个参数表示仅在组件挂载后执行一次


  return (

    < Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      < Box>
        {breadC.length > 0 &&
          <div className="container" >
            {breadC.map((value, count) => (
              // <StyledBreadcrumb label={value.typeName} key={value.id} onClick={()=>handleClick(value.id)} />
              <div className="containerA"  key={value.id}>
                <a href="#" className="btn" onClick={() => handleClick(value.id)}>{value.typeName}</a>
              </div>
            ))}

          </div>
        }
      </Box>
      {showList && (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: "3rem", marginTop: "2%" }}>
          <Box sx={{ width: '60%' }}>
            <ArticleList />
          </Box>
        </Box>
      )}


    </Box>
  );
}



