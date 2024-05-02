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

import servicePath from '../config/apiUrl';
import MarkdownRenderer from '../markdownSetup_V2.jsx';

import Divider from '@mui/material/Divider';


const Mian_left = () => {
  const [myList, setMylist] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(servicePath.getArticleList);
        console.log('Response data:', response.data); // 打印响应数据
        setMylist(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // 调用异步函数
    // const promise = new Promise((resolve)=>{
    //   axios('http://localhost:5173/api1/default/getArticleList').then(
    //     (res)=>{
    //       console.log('sssssssssssssssss->',resolve(res.date))
    //       resolve(res.date)
    //     }
    //   )})
    // return await promise


  }, []); // 空数组作为第二个参数表示仅在组件挂载后执行一次


  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {myList.map((value, count) => (
        <React.Fragment key={value.id}>
        
        <ListItem
          key={value.id}
          disableGutters
        //   secondaryAction={
        //     <span>asdasdasd</span>
        //   }
        >


          <ListItemText

            primary={
              <>
                <Typography className='list-title' variant='h5'
                // style={{ fontSize: '3.2rem' }}
                >
                  {/* 文章标题 */}
                  {/* <Link href={{pathname:'/detail',query:{id:value.id}}} underline="hover"> */}
                  <Link href={`detail/${value.id}`} underline="hover">
                    {value.title}
                  </Link>

                </Typography>
              </>
            }

            secondary={

              <>
                <Typography
                  className='list-icon' component="span"
                  sx={{ display: 'flex', alignItems: 'center' }}
                // component="span"
                // variant="body2"
                // color="text.secondary"
                >
                  {/* 文章时间分类附件之类 */}
                  <span><AccessTimeIcon /></span> <span> &nbsp;   {value.addTime}&nbsp;&nbsp;</span>
                  <span><ClassIcon /></span> <span> &nbsp;     {value.typeName}&nbsp;&nbsp;</span>
                  <span><WhatshotIcon /></span> <span> &nbsp;     {value.view_count}&nbsp;&nbsp;</span>

                </Typography >
                {/*这里下面要注意下 那个component 设置为div 还是 span 之类的要确定好*/}

                <Typography className='list-context' component="span"
                // component="span" variant="body2" sx={{ color: 'black' }} 
                >
                  {/* 文章内容简介 */}
                  {/* {value.introduce} */}
                  {value.introduce && <MarkdownRenderer markdownText={value.introduce} />}

                </Typography>


              </>

            }

          />

        </ListItem>
        {count !== myList.length - 1 && <Divider />} {/* 只在最后一项后不添加 Divider */}

        </React.Fragment>

      ))}
    </List>
    
  )
}

// Mian_left.getInitialProps = async ()=>{
//   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa')
//   const promise = new Promise((resolve)=>{
//     axios('http://127.0.0.1:7001/default/getArticleList').then(
//       (res)=>{
//         console.log('sssssssssssssssss->',res.data)
//         resolve(res.date)
//       }
//     )
//   })

//   return await promise
// }

export default Mian_left













