import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addPost} from  '../../actions/index';
import {reduxForm} from 'redux-form';
import {browserHistory} from 'react-router';

class AddPost extends Component {
    static contextTypes = {
        router:React.PropTypes.object
}; 

handleFormSubmit(formProps){
this.props.addPost(formProps);
this.context.router.push('/posts');
}
    render(){
      const {handleSubmit,fields:{title,body}} = this.props;
        return (
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
        );

    }

}

function validate(formProps){
const errors = {};
if(! formProps.title){
 errors.title = "Title is required";   
}
if(! formProps.body){
    errors.body = "Body is required";
}
return errors;
}

function mapStateToProps(state){
  return {
    posts:state.post
  }
}

export default reduxForm({
form:'post',
fields:['title','body'],
validate:validate,
},mapStateToProps,{addPost})(AddPost);
