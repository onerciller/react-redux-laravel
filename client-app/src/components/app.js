import React from 'react';
import { Component } from 'react';
import Header from './header';
export default class App extends Component {
  render() {
    return (
	    <div>
            <div className="container">
	     <Header />
       {this.props.children}
           </div>
	</div>
    );
  }
}
