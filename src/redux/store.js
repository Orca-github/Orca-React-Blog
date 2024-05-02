import { configureStore } from '@reduxjs/toolkit'
import reducer from './create_reducer.js'
const store= configureStore({

    reducer
}
)
export default store
