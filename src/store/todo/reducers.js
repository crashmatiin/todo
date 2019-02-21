import { ADD_TODO, MORE_TODO } from "./actions";
import { omit, assign, mapValues } from 'lodash';

const initialState = {
    todos : [],
};

export default function todo ( state = initialState, action) {
    switch (action.type) {

        case MORE_TODO:
            return {
                ...state,
                todosById: mapValues(state.todosById, (todo) => {
                    return todo.id === action.id ?
                        assign({}, todo, { isOpened: !todo.isOpened })
                        : assign({}, todo, { isOpened: false})
                })
            };

        case ADD_TODO:
            const todo = action;
            return {
                ...state,
                todos: state.todos.concat(todo.id),
                todosById: {
                    ...state.todosById,
                    [todo.id] : {
                        id: todo.id,
                        title: todo.title,
                        text: todo.text,
                    }
                }
            };

        default: return state;
    }
}