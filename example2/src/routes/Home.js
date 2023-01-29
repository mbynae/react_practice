import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import Todo from '../component/Todo';

const Home = ({ state, addTodos }) => {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addTodos(text);
        setText('');
    };

    return (
        <div>
            <h1>할 일 리스트</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="할말있냐?" value={text} onChange={onChange} required />
                <button>추가</button>
            </form>
            <ul>
                {state.map((todo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodos: (text) => dispatch(actionCreator.addTodos(text)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
