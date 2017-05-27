import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from  '../actions';

class AddTodo extends Component {
	constructor(props) {
	    super(props);
	    this.state = { newtodo: '' };
	    this.newTodo = (e) => {
	    	e.preventDefault();
	    	this.props.dispatch(addTodo(this.state.newtodo));
	    	this.setState({ newtodo: '' });
	    };
	    this.changeTodo = (e) => {
	    	this.setState({ newtodo: e.target.value });
	    };
	}

	render(){
		return (
			<form onSubmit={this.newTodo}>
				<input type="text" value={this.state.newtodo} name="addTodo" placeholder="Add a Todo                                                            +" onChange={this.changeTodo}/>
			</form>
		);
	}
}
export default connect(null)(AddTodo);