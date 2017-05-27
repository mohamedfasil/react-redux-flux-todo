import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import styles from './styles.less';


const TodoApp = () => (
  <div className="todo">
  	<AddTodo />
  	<TodoList />
  </div>
);

export default (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)