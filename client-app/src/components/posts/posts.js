import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import {Link} from 'react-router';
class Posts extends Component {

  componentWillMount(){
  this.props.fetchPost();
  }
  handleEditButton(post) {
      if(this.props.authenticated){
      return ( 
            <Link  className="pull-xs-right btn btn-warning btn-sm" to ={"posts/"+post.id+"/edit"}>Edit</Link>
             );
      }
  }

 renderPosts() {
     console.log(this.props.update);
     if(this.props.posts){
    return this.props.posts.map((post) => {
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
  }


    render(){
        return (
              <div className="container clearfix">
                <ul className="list-group">
                {this.renderPosts()}
                </ul>
              </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        posts:state.posts.all,
        authenticated:state.auth.authenticated,
        update:state.posts.update
    }
}
export default connect(mapStateToProps,actions)(Posts);
