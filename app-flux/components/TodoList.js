import React, { Component } from 'react';
import TodoStore from '../data/TodoStore';
import TodoActions from '../data/TodoActions';

class TodoList extends Component {
	constructor(props) {
	    super(props);
	    this.state = { todos: TodoStore.getTodos() };
	    this.deleteTodo = (id) => {
	    	TodoActions.removeTodo(id);
	    };
	    this.markTodo = (id) => {
	    	TodoActions.markTodo(id);
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
	    this.onChange = () => {
	    	this.setState({
				todos: TodoStore.getTodos()
			});
	    }
	}
	componentDidMount(){
		TodoStore.addChangeListener(this.onChange);
	}
	componentWillUnmount(){
		TodoStore.removeChangeListener(this.onChange);
	}

	render(){
		const todos = this.state.todos;
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

export default TodoList;