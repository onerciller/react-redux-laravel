import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {Link} from 'react-router';
import spinner from 'react-loader';
class Posts extends Component {

  componentWillMount(){
  this.props.fetchPost();
  this.props.userInfo();
  }
  handleEditButton(post) {
      if(this.props.authenticated){
      return ( 
            <Link  className="pull-xs-right btn btn-warning btn-sm" to ={"posts/"+post.id+"/edit"}>Edit</Link>
             );
      }
  }

 renderPosts(posts) {
    return posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
            <Link to={"posts/"+post.id}>
            <strong>{post.title}</strong>
            </Link>
            {this.handleEditButton(post)}
        </li>
      );
    });
  }

    render(){
        const {posts,loading,error} = this.props.postsList;
        if(loading === true){  
            return <div className="loader"></div>;
        }
        return (
                <div>
                <br />
                <div className="clearfix"></div>
                <ul className="list-group">
                {this.renderPosts(posts)}
                </ul>
                </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        postsList:state.posts.postsList,
        authenticated:state.auth.authenticated,
        userinfo : state.auth.userinfo
    }
}
export default connect(mapStateToProps,actions)(Posts);
