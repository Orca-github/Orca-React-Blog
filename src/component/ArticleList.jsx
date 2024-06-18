import React, { useState, useEffect } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ClassIcon from '@mui/icons-material/Class';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import axios from 'axios';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import servicePath from '../config/apiUrl.js';
import { useParams } from 'react-router-dom'

import MarkdownRenderer from '../markdownSetup_V2.jsx';
import { useSelector, useDispatch } from 'react-redux';


const ArticleList = () => {
  const [myList, setMylist] = useState([])
  const { id } = useParams()
  const findList = useSelector(state => state.findL.apiValue);
  // console.log("findlist is :", findList)

  //id目前从header
  //接受typeid 使用typeid获取文章列表
  useEffect(() => {

    // console.log("setMylist", myList)

    const fetchData = async () => {
      try {
        // const response = await axios.get(servicePath.getListById + id);
        const response = await axios.get(findList);
        console.log('Response  data:', response.data); // 打印响应数据
        setMylist(response.data.data);
      } catch (error) {
        console.error('Print Error fetching data:', error);
        setMylist([]);

      }
    };
    if (findList) {
      fetchData(); // 调用异步函数
    }

  }, [findList]); // 空数组作为第二个参数表示仅在组件挂载后执行一次


  return (

    <>
      {/**没有结果 */}
      {myList.length == 0 &&

        <Paper
          // style={{ fontSize: '3.2rem' }}
          sx={{ height: "20vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        >
          <Typography variant='h5' sx={{ color: 'gray', textAlign: 'center' }}

          >
            < SearchOffIcon />    No corresponding article at this time

          </Typography>

        </Paper>
      }

      {/**显示结果 */}
      {myList.length > 0 &&
        <div>
          {myList.map((value, count) => (
            <React.Fragment key={value.id}>
              <Card sx={{ mb: 2, backgroundColor: "background.paper", width: '100%' }}>
                <CardContent>
                  <Typography variant='h5'>
                    <Link href={`detail/${value.id}`} underline="hover">
                      {value.title}
                    </Link>
                  </Typography>
                  <Typography sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <AccessTimeIcon fontSize="small" /> <span>&nbsp;{value.addTime}&nbsp;&nbsp;</span>
                    <ClassIcon fontSize="small" /> <span>&nbsp;{value.typeName}&nbsp;&nbsp;</span>
                    <WhatshotIcon fontSize="small" /> <span>&nbsp;{value.view_count}&nbsp;&nbsp;</span>
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    {value.introduce && <MarkdownRenderer markdownText={value.introduce} />}
                  </Typography>
                </CardContent>
              </Card>
              {count !== myList.length - 1 && <Divider />}
            </React.Fragment>
          ))}

        </div>
      }
    </>
  )
}


export default ArticleList













