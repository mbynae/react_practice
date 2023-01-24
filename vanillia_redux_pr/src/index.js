import { legacy_createStore } from '@reduxjs/toolkit';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TO = 'ADD_TO';
const DEL_TO = 'DEL_TO';

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO:
            return [];
        case DEL_TO:
            return [];
        default:
            return state;
    }
};

const store = legacy_createStore(reducer);

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = '';
    store.dispatch({
        type: ADD_TO,
        text: toDo,
    });
};

form.addEventListener('submit', onSubmit);
