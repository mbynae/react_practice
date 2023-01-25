import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const Detail = ({ todos }) => {
    const Pid = useParams();
    const state = todos.find((todo) => todo.id === parseInt(Pid.id));

    return (
        <>
            <h1>{state.text}</h1>
            <h5>create at {state.id}</h5>
        </>
    );
};

function mapStateToProps(state) {
    return { todos: state };
}

export default connect(mapStateToProps)(Detail);
