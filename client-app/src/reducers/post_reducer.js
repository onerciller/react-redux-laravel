import {FETCH_POST,ADD_POST,POST_SHOW,EDIT_POST,UPDATE_POST} from '../actions/types';

const INITIAL_STATE = {all:[],post:null};

export default function (state = INITIAL_STATE,action){
    switch (action.type) {
        case POST_SHOW:
        return {...state,post:action.payload.data};  
      case FETCH_POST:
        return { ...state, all: action.payload.data };     
      case EDIT_POST:
        return { ...state, edit: action.payload.data };     
      case UPDATE_POST:
        return { ...state, update: action.payload.data };     
      default:
        return state;
    }
}

