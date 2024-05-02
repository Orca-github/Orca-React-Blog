import React, { useEffect, useState } from 'react'
import '../static/pages/detail.css'
import Author from './author'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import '../static/pages/main_content.css'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
// import marked from '../markdownSetup';
import servicePath from '../config/apiUrl';
import MarkdownRenderer from '../markdownSetup_V2.jsx';

//面包导航
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

//定义markdown
// const MarkdownRenderer = ({ markdownText  }) => {
//     // console.log('打印md fun 里面',markdownText )
//     const getMarkdownText = () => {
//       const rawMarkup = marked(markdownText );
//       return { __html: rawMarkup };
//     };

//     return <div dangerouslySetInnerHTML={getMarkdownText()} />;
//   };


//返回
export default function Detail() {
    const { id } = useParams()
    // console.log('detail id号是',id)

    const [myList, setMylist] = useState([])
    //获取文本内容 搜索
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(servicePath.getArticleById + id)
                // console.log(response)
                setMylist(response.data.data[0])
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // 空数组作为第二个参数表示仅在组件挂载后执行一次

    //   console.log('mylist',myList)

    return (
        <Box className='comm-main' sx={{ flexGrow: 1 }} >
            <Grid container spacing={0.5} columns={16} justifyContent="center" >
                <Grid className='comm-left' xs={8} sx={{ minHeight: '80vh' }} >
                    {/*面包导航 */}
                    <div className="bread-div">
                        <Breadcrumbs aria-label="breadcrumb">
                            <StyledBreadcrumb
                                component="a"
                                href="#"
                                label="Home"
                                icon={<HomeIcon fontSize="small" />}
                            />
                            <StyledBreadcrumb component="a" href="#" label="Catalog" />
                            <StyledBreadcrumb
                                label="Accessories"
                                deleteIcon={<ExpandMoreIcon />}
                            />
                        </Breadcrumbs>
                    </div>

                    <div>
                        {/*标题 */}
                        <div className='detailed-title'>{myList.title}</div>
                        {/*附件 */}
                        <div className='list-icon center'>
                            <span><CalendarMonthIcon /> 2024/4/24</span>
                            <span><CalendarMonthIcon /> 2024/4/24</span>
                            <span><WhatshotIcon /> 10</span>
                        </div>
                        {/*内容 */}
                        <div className='detailed-content'>
                            {myList.content && <MarkdownRenderer markdownText={myList.content} />}
                            {/* <TestMar/> */}
                        </div>
                    </div>

                </Grid>
                <Grid className="comm-right" xs={4} >
                    <Author />
                    <div className='article-menu'>
                        <div className='nav-title'>Outline</div>
                        {/* <TOC className='article-menu-item' markdown={markdown}  scrollAlign='start'/> */}
                        <MarkNav className='article-menu-item' source={myList.content}
                            // headingTopOffset={10}
                            ordered={false}

                        />
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}








