import { legacy_createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addTodos = (text) => {
    return {
        type: ADD,
        text,
    };
};

const deleteTodos = (id) => {
    return {
        type: DELETE,
        id,
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

const store = legacy_createStore(reducer);

export const actionCreator = {
    addTodos,
    deleteTodos,
};

export default store;
