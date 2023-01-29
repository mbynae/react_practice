import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreator } from '../store';

const Todo = ({ id, text, deleteTodos }) => {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={deleteTodos}>삭제</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteTodos: () => dispatch(actionCreator.deleteTodos(ownProps.id)),
    };
};

export default connect(null, mapDispatchToProps)(Todo);
