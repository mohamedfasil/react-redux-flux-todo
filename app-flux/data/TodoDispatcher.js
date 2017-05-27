import { Dispatcher } from 'flux';

class TodoDispatcherClass extends Dispatcher {
	handleAction(action) {
		this.dispatch({
			source: 'VIEW_TODOS',
			action: action
		});
	}
}

const TodoDispatcher = new TodoDispatcherClass();
export default TodoDispatcher;