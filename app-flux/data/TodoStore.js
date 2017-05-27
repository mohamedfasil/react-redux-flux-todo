import TodoDispatcher from './TodoDispatcher';
import TodoActions from './TodoActions'; 
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';
let todoId = 0;
let _store = {
	todos: []
};

const addItem = (item) => {
	_store.todos.push({
		id: todoId++,
		todo: item,
		done: false
	});
};

const removeItem = (id) => {
	let index;
	for(var i = 0; i < _store.todos.length; i++) {
		if (_store.todos[i].id === id) {
			index = i;
		}
	}
	_store.todos.splice(index, 1);
};
const markItem = (id) => {
	_store.todos =  _store.todos.map(todo => {
		if (todo.id === id) {
			return { ...todo, done: true};
		}
		return { ...todo };
	});
};

const TodoStore = Object.assign({}, EventEmitter.prototype, {  
	addChangeListener(cb){
		this.on(CHANGE_EVENT, cb);
	},
	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb);
	},
	getTodos(){
		return _store.todos;
	},
});

TodoDispatcher.register(function(payload){  
	const action = payload.action;
	switch(action.actionType){
		case 'ADD_TODO':
			addItem(action.data);
			TodoStore.emit(CHANGE_EVENT);
			break;
		case 'DELETE_TODO':
			removeItem(action.data);
			TodoStore.emit(CHANGE_EVENT);
			break;
		case 'MARK_DONE':
			markItem(action.data);
			TodoStore.emit(CHANGE_EVENT);
			break;
		default:
			return true;
	}
});

export default TodoStore;