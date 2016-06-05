import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {browserHistory} from 'react-router';

class Login extends Component{
  handleFormSubmit({email,password}){

    this.props.loginUser({email,password});
  }

    componentWillMount(){
    if(this.props.authenticated === true){
        browserHistory.push('/');
    }
  }

  renderAlert(){
    if(this.props.errorMessage){
      return (
        <div className="alert alert-danger">
         {this.props.errorMessage }
        </div>
      );
    }
  }

  render(){
    const {handleSubmit,fields:{email,password}} = this.props;
     return (
        <div className="row">
        <div className="col-md-6">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" {...password} className="form-control" />
        </fieldset>
          {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Login</button>
      </form>
        </div>
        </div>
   );
  }

}


function mapStateToProps(state) {
  return { errorMessage: state.auth.error,
           authenticated:state.auth.authenticated
   }
}

export default reduxForm({
  form:'login',
  fields:['email','password']
},mapStateToProps,actions)(Login);
