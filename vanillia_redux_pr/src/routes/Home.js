import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import Todo from '../components/Todo';

const Home = ({ todos, addTodos }) => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText('');
        addTodos(text);
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} placeholder="할 일을 입력해주세요." required onChange={onChange} />
                <button>추가</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <Todo {...todo} key={todo.id} />
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = (state) => {
    return { todos: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodos: (text) => dispatch(actionCreator.addTodos(text)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
