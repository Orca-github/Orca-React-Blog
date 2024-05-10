import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

import { ForAxios, ForAxiosCsrf } from '../component/ForAxios';
import servicePath from '../config/apiUrl'
import ComDialog from '../component/ComDialog';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom'




export default function ArticleList2() {
  const [list, setList] = useState([]);//控制显示数据
  const [openDialog, setOpenDialog] = useState(false);//控制显示Dialog
  const [selectedArticle, setSelectedArticle] = useState(null);//记录被选择的id
  const [snackbarMessage, setSnackbarMessage] = useState("");//控制alter
  const [openSnackbar, setOpenSnackbar] = useState(false);//控制alter文字

  const navigate = new useNavigate()

  //获取数据
  async function fetchListData() {
    try {
      const response = await ForAxiosCsrf('get', servicePath.getArticleList);
      setList(response.data.data)
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }

  //删除文章 单
  async function delArticle(id) {
    try {
      const response = await ForAxiosCsrf('get', servicePath.delArticle + id);
      //重新显示数据
      fetchListData()
      //关闭dia
      setOpenDialog(false);
      //显示提示
      setSnackbarMessage("Success to delete article!");
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      //显示提示
      setSnackbarMessage("Failed to delete article!");
      setOpenSnackbar(true);
      handleClose()
    }
  }

  //加载时
  useEffect(() => {
    //获得文章列表
    fetchListData()
  }, [])

  //不删除文章
  const handleClose = () => {
    setOpenDialog(false);
    //显示提示
    setSnackbarMessage("Nothing change");
    setOpenSnackbar(true);
  };

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'typeName', headerName: 'Type', flex: 1 },
    { field: 'addTime', headerName: 'Submit date', flex: 1 },
    {
      field: 'view_count',
      headerName: 'View count',
      // type: 'number',
      flex: 0.5,
      headerAlign: 'left',
      align: 'left'
    },
    {
      field: 'process',
      sortable: false,
      headerName: 'Process',
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <Box
            sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <ButtonGroup variant="text" aria-label="Basic button group" sx={{ display: 'table-cell' }}>
              <Button size="small" onClick={(event) => {
                handleAlterClick(event, cellValues);
              }}>Alter</Button>
              <Button size="small" color="error" startIcon={<DeleteIcon />} onClick={(event) => {
                handleDeleteClick(event, cellValues);
              }}>Delet</Button>
            </ButtonGroup>
          </Box>

        )
      }
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    // },
  ];
//操作修改
  const handleAlterClick = (event, cellValues) => {
    navigate('/admin/add/'+cellValues.id)
  };

  //操作删除
  const handleDeleteClick = (event, cellValues) => {
    // setSelectedArticle(article);
    setSelectedArticle(cellValues.id)
    setOpenDialog(true);
  };

  return (
    <div style={{ display: 'flex', height: '90%', width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 1 }}>
        <DataGrid
          rows={list}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
        <ComDialog
          title='Are you sure to delete the Article ?'
          mes='Click ok and the article will be permanently deleted unrecoverable.'
          open={openDialog}
          handleOk={() => { delArticle(selectedArticle) }}
          handleClose={handleClose} />

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          message={snackbarMessage}
        />
      </Paper>
    </div>
  );
}