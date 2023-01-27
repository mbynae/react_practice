import { legacy_createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addTodos = (text) => {
//     return {
//         type: ADD,
//         text,
//     };
// };

// const deleteTodos = (id) => {
//     return {
//         type: DELETE,
//         id,
//     };
// };

const addTodos = createAction('ADD');
const deleteTodos = createAction('DELETE');

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addTodos.type:
//             return [{ text: action.payload, id: Date.now() }, ...state];
//         case deleteTodos.type:
//             return state.filter((todo) => todo.id !== action.payload);
//         default:
//             return state;
//     }
// };

const reducer = createReducer([], {
    [addTodos]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteTodos]: (state, action) => state.filter((todo) => todo.id !== action.payload),
});

const store = legacy_createStore(reducer);

export const actionCreator = {
    addTodos,
    deleteTodos,
};

export default store;
