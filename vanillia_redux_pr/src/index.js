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
            return [{ text: action.text, id: Date.now() }, ...state];
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

const dispatchDeleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteTodos(id));
};

store.subscribe(() => console.log(store.getState()));

const paintTodo = () => {
    const todos = store.getState();
    ul.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.addEventListener("click", dispatchDeleteTodo);
        btn.innerText = "삭제";
        btn.style.marginLeft = "10px";
        li.style.marginBottom = "10px";
        li.id = todo.id;
        li.innerText = todo.text;
        ul.appendChild(li);
        li.appendChild(btn);
    });
};

store.subscribe(paintTodo);

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddTodos(toDo);
};

form.addEventListener("submit", onSubmit);
