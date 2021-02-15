import pageReducer from './page'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    pageNum: pageReducer
})

export default allReducers;