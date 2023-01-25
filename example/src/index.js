import { legacy_createStore } from "@reduxjs/toolkit";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TO = "ADD_TO";
const DEL_TO = "DEL_TO";

const addTodos = (text) => {
    return { type: ADD_TO, text };
};

const deleteTodos = (id) => {
    return { type: DEL_TO, id };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO:
            return [...state, { text: action.text, id: Date.now() }];
        case DEL_TO:
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
};

const store = legacy_createStore(reducer);

const dispatchAddTodos = (text) => {
    store.dispatch(addTodos(text));
};

const dispatchDeleteTodos = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteTodos(id));
};

const paintTodos = () => {
    const todos = store.getState();
    ul.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.addEventListener("click", dispatchDeleteTodos);
        btn.innerText = "삭제";
        btn.style.marginLeft = "10px";
        li.style.marginBottom = "10px";
        li.id = todo.id;
        li.innerText = todo.text;
        ul.appendChild(li);
        li.appendChild(btn);
    });
};

store.subscribe(paintTodos);

const onSubmit = (e) => {
    e.preventDefault();
    const todo = input.value;
    input.value = "";
    dispatchAddTodos(todo);
};

form.addEventListener("submit", onSubmit);
