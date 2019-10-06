import {combineReducers} from 'redux'
import messages from './messages'
import login from './login'
export default combineReducers({
    messages,
    login
})