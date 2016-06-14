import React, { Component, PropTypes } from 'react';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
import {initialize} from 'redux-form';

class EditPost extends Component {
    static contextTypes = {
    router:PropTypes.object
    }

    componentWillMount(){
    this.props.EditPost(this.props.params.id);
    }


handleFormSubmit(formProps){
this.props.updatePost(this.props.params.id,formProps);
if(this.props.updatePostStatus.post == true){
this.context.router.push('/posts');
}
}

    render(){
      const {handleSubmit,fields:{title,body}} = this.props;
        if(!this.props.edit){
            return <div className="loader"></div>;
        }
        return (
            <div>
          <div className="row">
          <div className="col-md-12">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                  <label>Title:</label>
                  <input {...title} className="form-control" />
                  {title.touched && title.error && <div className="text-danger">{title.error}</div>}
                  </fieldset>
                <fieldset className="form-group">
                  <label>Body:</label>
                  <textarea {...body} className="form-control" ></textarea>
                  {body.touched && body.error && <div className="text-danger">{body.error}</div>}
                </fieldset>
                 <button className="btn btn-success">Add</button>
                </form>
          </div>
          </div>
            </div>
               );
    }

    }

function mapStateToProps(state) {
    return {
        edit:state.posts.editPost,
        initialValues: state.posts.editPost.post,
        updatePostStatus: state.posts.updatePost
    }
}
export default reduxForm({
form:'edit',
fields:['title','body'],
},mapStateToProps,actions)(EditPost);
