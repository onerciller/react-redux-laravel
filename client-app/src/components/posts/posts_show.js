import React, { Component, PropTypes } from 'react';
import * as thunkMiddleware from 'redux-thunk';
import {connect} from 'react-redux';
import * as actions from '../../actions';
class PostsShow extends Component{
    static contextTypes= {
        router:PropTypes.object
    }
    componentWillMount(){
    this.props.PostShow(this.props.params.id);
    }
    handleDeleteClick(){
        this.props.deletePost(this.props.params.id);
             this.context.router.push('/posts');
        }
    handleDeletePost() {
            if(this.props.authenticated){
                return (                
       <button onClick={this.handleDeleteClick.bind(this)} className="btn btn-danger pull-xs-right">Delete</button>
                );
            }
    }
    renderPost(post){
        if(post){
        return (
            <div>
            <h3>{post.title}</h3>
            {this.handleDeletePost()}    
            <p>{post.body}</p>
            </div>
               );
        }
    }
    render(){
        const {post,loading,error} = this.props.activePost;
        if(loading == true){
            return <div className="loader"></div>;
        }
        return (
            <div>
            {this.renderPost(post)}
            </div>
               );
    }
}
function mapStateToProps(state){
    return {
        activePost:state.posts.activePost,
        authenticated:state.auth.authenticated
    }
}

export default connect(mapStateToProps,actions)(PostsShow);
