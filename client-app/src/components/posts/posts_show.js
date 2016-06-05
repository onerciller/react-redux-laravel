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
    render(){
        console.log(this.props.authenticated);
        if(!this.props.post){
            return <div>Loading...</div>;
        }
        return (
            <div>
            <h3>{this.props.post.title}</h3>
            {this.handleDeletePost()}    
            <p>{this.props.post.body}</p>
            </div>
               );
    }
}
function mapStateToProps(state){
    return {
        post:state.posts.post,
        authenticated:state.auth.authenticated
    }
}

export default connect(mapStateToProps,actions)(PostsShow);
