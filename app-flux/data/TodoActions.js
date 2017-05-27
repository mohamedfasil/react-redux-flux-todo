import TodoDispatcher from './TodoDispatcher';

const TodoActions = {
	addTodo(todo) {
		TodoDispatcher.handleAction({
			actionType: 'ADD_TODO',
			data: todo
		});
	},
	removeTodo(id) {
		TodoDispatcher.handleAction({
			actionType: 'DELETE_TODO',
			data: id
		});
	},
	markTodo(id) {
		TodoDispatcher.handleAction({
			actionType: 'MARK_DONE',
			data: id
		});
	}
};

export default TodoActions;