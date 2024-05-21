//容器组件使用react-redux 实现

//引入ui组件后面要把ui和container写一起 所以不需要了
// import FullScreen from "../../component/Home/FullScreen";
//引入store
//作为上层参数传进来的
// import { connect } from "react-redux";


import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Box, Typography, Container } from '@mui/material';
import MainPage from "../../component/main_page";
import Button from '@mui/material/Button';

import { changeBackgroundAsync,backReducer } from '../../redux/store'; // 确保正确导入

// /*使用connect()() 创建并暴露一个background 的容器组件
// connect 第一个参数里面传的是 两个function  mapStateToProp function的返回值作为状态传递给了ui组件
//  返回的还得是 key：value的对象 要不然之后的this.props 没法定位取到props
// 相当于 <FullScreen n={900} />
// mapStateToProp函数返回的状态 ： mapStateToProp函数返回的对象中的key就作为传递给ui组件props的key，value就作为传递给ui组件props的value
// react-redux已经写好了 store.getState() 可以直接用  -state **/
// function mapStateToProp (state){
//     return {count:state}
// }

// /*//mapDispatchToProps函数返回的操作状态的方法 ：mapDispatchToProps函数返回的对象中的key就作为传递给ui组件props的key，value就作为传递给ui组件props的value
// 这个dispath 是react-redux准备好的 相当于store.dispatch
//  function mapDispatchToProps  (dispatch){
//      return {jia:(data)=>{
//          dispatch(changeBacAction(data))
//      }}
//  }*/

// function mapDispatchToProps  (dispatch){
//     return {
//         change:data=> dispatch(changeBacAction(data)),
//         jia:data=>dispatch(increaseAction(data)),
//         asyChange:(data,time)=>dispatch(increaseAsyncAction(data,time))

//     }
// }
// export  default connect(mapStateToProp,mapDispatchToProps)(FullScreen )

// //上面的简化代码
// export default connect(
//     state => ({ count: state }),
//     dispatch => ({
// //mapDispatchToProps的一般写法
//         change: data => dispatch(changeBacAction(data)),
//         jia: data => dispatch(increaseAction(data)),
//         asyChange: (data, time) => dispatch(increaseAsyncAction(data, time))
//     })
// )(FullScreen)




const  Background = () => {
  const backgroundImage = useSelector(state => state.back.backgroundImage);
//   const backgroundImage = store.getState();
// const backgroundImage = props.count
//   const dispatch = useDispatch();
  const dispatch = useDispatch();
  // 可以在这里根据需要派发 actions
  // 例如，在组件加载时更改背景
  // useEffect(() => {
  //   dispatch({ type: 'CHANGE_BACKGROUND', payload: '/new/image/path.jpg' });
  // }, [dispatch]);
const handleChange = ()=>{
  // dispatch(backReducer('/MyAvatar.jpg'))
  dispatch(changeBackgroundAsync({ imageUrl: '/MyAvatar.jpg', delay: 500 }));
    // props.asyChange('/MyAvatar.jpg',500)
}
  return (
    <>
      <Box sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
      }}>
        <Typography variant="h2" gutterBottom>
          Welcome to My Blog
        </Typography>
        <Button onClick={handleChange}>click change</Button>

        <Typography variant="h5">
          Explore the world through my eyes
        </Typography>
      </Box>
      <Container maxWidth="md">
        <MainPage/>
      </Container>
    </>
  );
}

export default Background

