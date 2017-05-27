let todoId = 0;

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        id: todoId++,
        todo
    };
};

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id: id
    }
};

export const markTodo = (id) => {
    return {
        type: 'MARK_DONE',
        id: id
    }
};
