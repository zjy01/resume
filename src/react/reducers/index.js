/**
 * Created by zjy on 16-3-11.
 */
import { combineReducers } from 'redux'
import clock from './clock'
import menu from './menu'
import sh from './sh'

const reducer = combineReducers({
    clock,
    menu,
    sh
});

export default reducer;