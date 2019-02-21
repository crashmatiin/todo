export const MORE_TODO = 'MORE_TODO';
export const ADD_TODO = 'ADD_TODO'

export function moreTodo(id) {
    return {
        type : MORE_TODO,
        id
    };
}
export function addTodo(todo) {
    return {
        type : ADD_TODO,
        todo
    };
}