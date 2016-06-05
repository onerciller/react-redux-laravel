import {AUTH_USER,UNAUTH_USER,AUTH_ERROR,LOGOUT_USER} from '../actions/types';
import jwtDecode from 'jwt-decode';
const token = localStorage.getItem('token');
export default function(state ={},action){
    switch (action.type) {
      case AUTH_USER:
          return {...state,authenticated:true};
      case LOGOUT_USER:
          return {...state,authenticated:false};
        break;
      case AUTH_ERROR:
          return {...state,error:action.payload};
      default:
          return state;
    }
}
