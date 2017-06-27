import {combineReducers} from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress
});

export default rootReducer;