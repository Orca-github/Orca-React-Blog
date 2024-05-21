import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//redux库 不是专门给react使用的 之后只用的是 react-redux
// import {applyMiddleware} from 'redux'
// import backReducer from './reducers/create_reducer.js'
//引入redux-thunk 用于支持异步action
// import {thunk} from 'redux-thunk'
//由于使用的是 configureStore 自动配置了 thunk


// 异步 thunk action 
export const changeBackgroundAsync = createAsyncThunk(
    'background/changeBackgroundAsync',
    async ({ imageUrl, delay }, thunkAPI) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(imageUrl);
                console.log("export")

            }, delay);
        });
    }
);
const backgroundSlice = createSlice({
    name: 'background',
    initialState: {
        backgroundImage: '/back.jfif'
    },
    reducers: {

        backReducer: (state, action) => {

            state.backgroundImage = action.payload;
            //console.log("444444S")

        }

    },
        extraReducers: (builder) => {
        builder
            .addCase(changeBackgroundAsync.fulfilled, (state, action) => {
                console.log("inside")
                // 当异步操作完成时，使用返回的图片 URL 更新背景图
                state.backgroundImage = action.payload;
            });
    }
});

export const { backReducer } = backgroundSlice.actions;

const reducer = {
    // 定义一个名为 `todos` 的顶级 state 字段，值为 `todosReducer`
    back: backgroundSlice.reducer,
}

const store = configureStore({

    reducer
}
)
export default store


// // store.js
// import { configureStore } from 'redux';

// // 初始状态
// const initialState = {
//   backgroundImage: '/path/to/default/image.jpg'
// };

// // Reducer 函数
// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'CHANGE_BACKGROUND':
//       return { ...state, backgroundImage: action.payload };
//     default:
//       return state;
//   }
// }

// // 创建 Redux store
// const store = configureStore({rootReducer});

// export default store