import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';

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

// const addTodos = createAction('ADD');
// const deleteTodos = createAction('DELETE');

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

// const reducer = createReducer([], {
//     [addTodos]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteTodos]: (state, action) => state.filter((todo) => todo.id !== action.payload),
// });

const todos = createSlice({
    name: 'todosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter((todo) => todo.id !== action.payload),
    },
});

// const store = configureStore({ reducer: todos.reducer });

// export const actionCreator = {
//     addTodos,
//     deleteTodos,
// };
export const { add, remove } = todos.actions;

export default configureStore({ reducer: todos.reducer });
