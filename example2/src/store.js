import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addTodos = createAction('ADD');
const deleteTodos = createAction('DELETE');

// const reducer = createReducer([], {
//     [addTodos]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteTodos]: (state, action) => state.filter((todo) => todo.id !== action.payload),
// });

const reducer = createReducer([], {
    [addTodos]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteTodos]: (state, action) => state.filter((todo) => todo.id !== action.payload),
});

const store = configureStore({ reducer });

export const actionCreator = {
    addTodos,
    deleteTodos,
};

export default store;
