import { createStore, combineReducers } from 'redux';

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				todo: action.todo,
				done: false
			};
		case 'MARK_DONE':
			if (state.id !== action.id) {
				return state;
			}
			return {
				...state,
				done: !state.done
			};
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'MARK_DONE':
			return state.map(t =>
				todo(t, action)
			);
		case 'DELETE_TODO':
			let copy = state;
			let index;
			for(var i = 0; i < copy.length; i++) {
				if (copy[i].id === action.id) {
					index = i;
				}
			}
			copy.splice(index, 1);			
			return [ ...copy ];
		default:
			return state;
	}
};

export default createStore(combineReducers({ todos}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());