import {AUTH_USER,UNAUTH_USER,AUTH_ERROR,LOGOUT_USER,USER_INFO_SUCCESS} from '../actions/types';
import jwtDecode from 'jwt-decode';
const token = localStorage.getItem('token');
export default function(state ={},action){
    switch (action.type) {
         case USER_INFO_SUCCESS: 
         return {...state,userinfo:action.payload.data}   
      case AUTH_USER:
          return {...state,authenticated:true};
      case LOGOUT_USER:
          return {...state,authenticated:false};
      case AUTH_ERROR:
          return {...state,error:action.payload};
      default:
          return state;
    }
}
