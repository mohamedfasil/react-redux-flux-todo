import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, markTodo } from '../actions';

class TodoList extends Component {
	constructor(props) {
	    super(props);
	    this.deleteTodo = (id) => {
	    	this.props.dispatch(deleteTodo(id));
	    };
	    this.markTodo = (id) => {
	    	this.props.dispatch(markTodo(id));
	    };
	    this.renderButton = (todo) => {
	    	if (todo.done) {
	    		return (
	    			<button className="delete" type="button" onClick={() => { this.deleteTodo(todo.id) }}>Delete!</button>
	    		);
	    	} else {
	    		return (
	    			<button type="button" onClick={() => { this.markTodo(todo.id) }}>Mark as Done!</button>
	    		);
	    	}
	    }
	}

	render(){
		const todos = this.props.todos;
		return (
			<ul>
				{
					todos.map((todo) => {
						return (
							<li className={todo.done ? 'done':''} key={todo.id}>
								<span>{todo.todo} </span>
								{ this.renderButton(todo) }
							</li>
						)
					})
				}
			</ul>
		);
	}
}

const mapStateToProps = (state) => (
	{ todos: state.todos }
);

export default connect(mapStateToProps)(TodoList);