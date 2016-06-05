import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER,AUTH_ERROR,LOGOUT_USER,FETCH_POST,ADD_POST,POST_SHOW,DELETE_POST,EDIT_POST,UPDATE_POST} from './types';
const ROOT_URL = 'http://localhost:8000';


export function loginUser({email,password}){
  return function(dispatch){
      axios.post(`${ROOT_URL}/api/login`,{email,password})
        .then(response => {
          dispatch({type: AUTH_USER,
            payload:{token:response.data.token}             
          });
          localStorage.setItem('token',response.data.token);
          browserHistory.push("/posts");
        })

        .catch(()=>{
          dispatch(authError("Empty Required Field"));
        });
  }

}

export function registerUser({email,password}){
    return function(dispatch){
        axios.post(`${ROOT_URL}/api/register`,{email,password})
          .then(response =>{
            dispatch({type:AUTH_USER});
            localStorage.setItem('token',response.data.token);
            browserHistory.push('/posts');
          })

          .catch(response => dispatch(authError(response.data.error)));

    }
}

export function addPost({title,body}){
  return function(dispatch){
    axios.post(`${ROOT_URL}/api/posts`,{title,body},
      {
      headers:{authorization:localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type:ADD_POST,
        payload:response
      })
    })
  }
}

export function fetchPost(){
    return function(dispatch){
      axios.get(`${ROOT_URL}/api/posts`,{
       headers: { authorization: localStorage.getItem('token') }
      })
        .then(response =>{
            dispatch({
              type:FETCH_POST,
              payload:response
            });
        })

    }
}


export function PostShow(id){
    return function(dispatch){
      axios.get(`${ROOT_URL}/api/posts/${id}`,{
       headers: { authorization: localStorage.getItem('token') }
      })
        .then(response =>{
            dispatch({
              type:POST_SHOW,
              payload:response
            });
        })

    }
}

export function EditPost(id){
    return function(dispatch){
      axios.get(`${ROOT_URL}/api/posts/${id}/edit`,{
       headers: { authorization: localStorage.getItem('token') }
      })
        .then(response =>{
            dispatch({
              type:EDIT_POST,
              payload:response
            });
        })
    }
}

export function updatePost(id,{title,body}){
  return function(dispatch){
    axios.put(`${ROOT_URL}/api/posts/${id}`,{title,body},
      {
      headers:{authorization:localStorage.getItem('token')}
    })
    .then(response => {
      dispatch({
        type:UPDATE_POST,
        payload:response
      })
    })
  }
}

export function deletePost(id){
    return function(dispatch){
      axios.delete(`${ROOT_URL}/api/posts/${id}`,{
       headers: { authorization: localStorage.getItem('token') }
      })
        .then(response =>{
            dispatch({
              type:DELETE_POST,
              payload:response
            });
        })

    }
}

export function authError(error){
    return {
      type:AUTH_ERROR,
      payload:error
    }
}

export function logoutUser() {
  localStorage.removeItem('token');
  return { type: LOGOUT_USER };
}
