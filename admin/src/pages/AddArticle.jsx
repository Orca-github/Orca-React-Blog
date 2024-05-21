import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';


import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import MarkdownRenderer from '../markdownSetup_V2';
import '../static/css/AddArticle.css'

import servicePath from '../config/apiUrl'
import axios from 'axios'
import { useNavigate ,useParams} from 'react-router-dom'
import { Maximize } from '@mui/icons-material';
import { ForAxios, ForAxiosCsrf } from '../component/ForAxios';


export default function AddArticle(props) {
    const [markText, setMarText] = useState([])

    const [articleId, setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle, setArticleTitle] = useState('')   //文章标题
    const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState("```javascript\r\nconst x = 1;") //html内容
    const [introducemd, setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml, setIntroducehtml] = useState('Waiting to be edited') //简介的html内容
    const [showDate, setShowDate] = useState()   //发布日期
    const [updateDate, setUpdateDate] = useState() //修改日志的日期
    const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType, setSelectType] = useState(1) //选择的文章类别
    const [partCount, setPartCount] = useState(0) //文章的集数
    const [isLoading, setIsLoadding] = useState(false) //是否显示加载
    const [submitAlerts, setSubmitAlerts] = useState(false);//提交时显示警告
    const [alterMessage, setAlterMessage] = useState({ message: '', type: 'warning' })//警告的消息
    const {id} = useParams()


    //加载时
    useEffect(() => {
        //获得文章分类信息
        getTypeInfo()
        if(id){
            setArticleId(id)
            getArticleByID(id)
        }
        //获取文章ID
    }, [])

    //受控 改变内容markdown
    const changeContent = (e) => {
        setArticleContent(e.target.value);
        setMarkdownContent(e.target.value)
    }

    //受控 改变简介 markdown
    const changeIntoruce = (e) => {
        setIntroducemd(e.target.value);
        setIntroducehtml(e.target.value)
    }

    //下拉选项切换事件
    const selectTypeHandler = (e) => {
        setSelectType(e.target.value)
    }

    //保存文章前检测各种输入的状态
    const saveArticle = async () => {

        if (!selectedType) {
            setAlterMessage({ message: 'Article type must be selected', type: 'warning' })
            setSubmitAlerts(true)
            return false
        } else if (!articleTitle) {
            setAlterMessage({ message: 'Article title can not be null', type: 'warning' })
            setSubmitAlerts(true)
            return false
        } else if (!articleContent) {
            setAlterMessage({ message: 'Article content can not be null', type: 'warning' })
            setSubmitAlerts(true)
            return false
        }
        else if (!introducemd) {
            setAlterMessage({ message: 'Article introduce can not be null', type: 'warning' })
            setSubmitAlerts(true)
            return false
        } else if (!showDate) {
            setAlterMessage({ message: 'Show date must be selected', type: 'warning' })
            setSubmitAlerts(true)
            return false
        }
        // setAlterMessage({ message: 'Pass check !', type: 'success' })
        // setSubmitAlerts(true)

        let dataProps = {}
        dataProps.type_id = selectedType
        dataProps.title = articleTitle
        dataProps.article_content = articleContent
        dataProps.introduce = introducemd
        // let dateText = showDate.replace('-', '/')
        dataProps.addTime = (new Date(showDate).getTime()) / 1000

        //增加
        if (articleId == 0) {
            dataProps.view_count = 0
            const response = await axios.get('/api/getCsrfToken');
            const csrfToken = response.data.csrfToken;
            try {//请求连接
                axios({
                    method: 'post',
                    url: servicePath.addArticle,
                    headers: {
                        'x-csrf-token': csrfToken, // 如果 CSRF token 是放在请求头中
                    },
                    data: dataProps,
                    //下面这个设置是前后端共享session
                    withCredentials: true
                }).then(
                    //中间件返回 如果没登陆
                    res => {
                        setArticleId(res.data.insertId)
                        if (res.data.isSuccess) {
                            setAlterMessage({ message: 'Article saveing successful !', type: 'success' })
                            setSubmitAlerts(true)
                        } else {
                            setAlterMessage({ message: 'Article saveing failed !', type: 'warning' })
                            setSubmitAlerts(true)
                        }
                    }

                )

            } catch (error) {
                console.error('Error fetching data:', error);
            }

            //修改
        } else {
            dataProps.id = articleId
            const response = await axios.get('/api/getCsrfToken');
            const csrfToken = response.data.csrfToken;
            try {//请求连接
                axios({
                    method: 'post',
                    url: servicePath.updateArticle,
                    headers: {
                        'x-csrf-token': csrfToken, // 如果 CSRF token 是放在请求头中
                    },
                    data: dataProps,
                    //下面这个设置是前后端共享session
                    withCredentials: true
                }).then(
                    //中间件返回 如果没登陆
                    res => {
                        if (res.data.isSuccess) {
                            setAlterMessage({ message: 'Article alter successful !', type: 'success' })
                            setSubmitAlerts(true)
                        } else {
                            setAlterMessage({ message: 'Article alter failed !', type: 'warning' })
                            setSubmitAlerts(true)
                        }
                    }

                )

            } catch (error) {
                console.error('Error fetching data:', error);
            }

        }



    }

    //关闭警告
    const closeSubmitAlter = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSubmitAlerts(false)

    }

    //初始化 动态获取文章类型
    const navigate = new useNavigate()
    const getTypeInfo = async () => {
        //设置csrf
        const response = await axios.get('/api/getCsrfToken');
        const csrfToken = response.data.csrfToken;
        try {//请求连接
            axios({
                method: 'get',
                url: servicePath.getTypeInfo,
                headers: {
                    'x-csrf-token': csrfToken, // 如果 CSRF token 是放在请求头中
                },
                //下面这个设置是前后端共享session
                withCredentials: true
            }).then(
                //中间件返回 如果没登陆
                res => {
                    if (res.data.data == 'No login') {
                        localStorage.removeItem('openID')
                        navigate('/')
                    } else {
                        //登录成功
                        setTypeInfo(res.data.data)

                    }
                }

            )

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }


//按照id获取文章内容
    async function getArticleByID() {
        try {
            const response = await ForAxiosCsrf('get', servicePath.getArticleById + id);
            const articleInfo = response.data.data[0]
            setArticleTitle(articleInfo.title)
            setArticleContent(articleInfo.content)
            setMarkdownContent(articleInfo.content)
            setIntroducemd(articleInfo.introduce)
            setIntroducehtml(articleInfo.introduce)
            setShowDate(articleInfo.addTime)
            setSelectType(articleInfo.typeId)
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    }



    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={1} sx={{ flex: 1 }} >
                {/* 文章标题*/}
                <Grid item xs={8} >
                    <Paper
                        sx={{
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 70,

                        }}
                    >
                        <TextField id='BlogTitleInput'
                            fullWidth
                            value={articleTitle}
                            color="secondary" focused
                            placeholder='Blog Title'
                            onChange={(e) => { setArticleTitle(e.target.value) }} />
                        {/* <Deposits /> */}
                    </Paper>
                </Grid>
                {/**下拉选择文章类型 */}
                <Grid item xs={4} >
                    <Paper
                        sx={{
                            p: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 70,
                        }}
                    >
                        <FormControl fullWidth>
                            <InputLabel variant="filled" htmlFor="uncontrolled-native">
                                Type
                            </InputLabel>

                            {/**  注意 是在使用NativeSelect的时候：
                             * 这里默认值不要写 defaultValue ，如果 selectedType 是一个会随时间变化的受控状态，
                             * 通常最好使用 value 属性而不是 defaultValue。你可以将组件更新为使用 value 属性：
                             * 由于用了value属性，点击不同的选择是不会发生变化的，需要设置onChang
                             * 如果使用的是defaultValue 点击不同选择会自动发生变化*/}
                            <NativeSelect
                                value={selectedType}
                                inputProps={{
                                    name: 'type',
                                    id: 'uncontrolled-native',
                                }}
                                onChange={selectTypeHandler}
                            >
                                {
                                    typeInfo.map((item, index) => {
                                        return <option key={index} value={item.id}>{item.typeName}</option>
                                    })
                                }
                            </NativeSelect>
                        </FormControl>
                    </Paper>
                </Grid>

                {/*输入文章内容*/}
                <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper sx={{ p: 2, flex: 1 }}>
                        <Box sx={{ flex: 1, display: 'flex' }}>

                            <TextField id='BlogText'
                                fullWidth
                                multiline
                                color="secondary" focused
                                placeholder='Blog Title'
                                sx={{ flex: 1 }}
                                rows={39}
                                value={articleContent}
                                onChange={changeContent}
                            />
                        </Box>

                    </Paper>
                </Grid>
                {/*预览文章内容*/}
                <Grid item xs={5} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper sx={{ p: 2, flex: 1 }}>
                        <div className='show-html'>
                            <MarkdownRenderer markdownText={markdownContent} />
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Paper sx={{ p: 2, flex: 1 }}>
                        <Stack spacing={2}>
                            {/**缓存 /提交 */}
                            <Stack direction={{ md: 'column', lg: 'row' }}
                                spacing={{ xs: 1, sm: 1, md: 1 }}>
                                <Button variant="contained" size="small">Caching</Button>
                                <Button variant="outlined" size="small" onClick={saveArticle}>Post</Button>
                                {/**显示提交警告 */}
                                {submitAlerts &&
                                    <Snackbar open={submitAlerts} autoHideDuration={6000} onClose={closeSubmitAlter}
                                    // anchorOrigin={{vertical:'top',horizontal: 'center'}} 
                                    >
                                        <Alert
                                            onClose={closeSubmitAlter}
                                            severity={alterMessage.type}
                                            variant="filled"
                                            sx={{ width: '100%' }}
                                        >
                                            {alterMessage.message}
                                        </Alert>
                                    </Snackbar>
                                }
                            </Stack>
                            {/**文章介绍 */}
                            <TextField id='BlogIntro'
                                fullWidth
                                multiline
                                color="secondary" focused
                                placeholder='Blog Introduce'
                                rows={4}
                                onChange={changeIntoruce}
                                value={introducemd}
                            />
                            {/**预览 */}
                            <div className='introduce-html' ><MarkdownRenderer markdownText={introducehtml} /> </div>
                            {/**日期 */}
                            <div className='data-select'>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker  onChange={(newValue) => { setShowDate(newValue) }} />
                                </LocalizationProvider>
                            </div>
                        </Stack>

                    </Paper>
                </Grid>

            </Grid>
        </Box>
    )
}
