import React, { Component } from 'react';
import AddTodo from  './AddTodo';
import TodoList from './TodoList';
import styles from '../../app-redux/components/styles.less';


class TodoApp extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="todo">
				<AddTodo />
				<TodoList />
			</div>
		);
	}
};

export default TodoApp;