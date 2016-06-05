import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import postReducer from './post_reducer';
const rootReducer = combineReducers({
   form,
   auth:authReducer,
   posts:postReducer
});
export default rootReducer;
