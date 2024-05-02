import React, { useState } from 'react'
import { marked } from 'marked'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { TextField } from '@mui/material'
import { Maximize } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function AddArticle() {
    const [markText, setMarText] = useState([])

    return (
        <Grid container spacing={1}>

            {/* Recent Deposits md={4} lg={3}*/}
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
                        color="secondary" focused
                        placeholder='Blog Title'
                        onChange={(e) => { setUserName(e.target.value) }} />
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
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            Type
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </NativeSelect>
                    </FormControl>
                </Paper>
            </Grid>

            {/*输入 sx={{  minHeight:'80vh' }} */}
            <Grid item xs={5}  >
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '80vh' }}>

                    <TextField id='BlogText'
                        fullWidth
                        multiline
                        color="secondary" focused
                        placeholder='Blog Title'
                        rows={37}
                        onChange={(e) => { setMarText(e.target.value) }}
                    />
                </Paper>
            </Grid>

            <Grid item xs={5}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
                    <div className='show-html'></div>
                </Paper>
            </Grid>

            <Grid item xs={2}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', minHeight: '80vh' }}>
                    <Stack spacing={2}>
                        {/**缓存 /提交 */}
                        <Stack direction={{ md: 'column', lg: 'row' }}
                            spacing={{ xs: 1, sm: 1, md: 1 }}>
                            <Button variant="contained" size="small">Caching</Button>
                            <Button variant="outlined" size="small">Post</Button>
                        </Stack>
                        {/**文章介绍 */}
                        <TextField id='BlogIntro'
                            fullWidth
                            multiline
                            color="secondary" focused
                            placeholder='Blog Introduce'
                            rows={4}
                            onChange={(e) => { setMarText(e.target.value) }}
                        />
                        {/**预览 */}
                        <div className='introduce-html' > Intordice preview </div>
                        {/**日期 */}
                        <div className='data-select'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker />
                            </LocalizationProvider>
                        </div>
                    </Stack>

                </Paper>
            </Grid>

        </Grid>
    )
}
