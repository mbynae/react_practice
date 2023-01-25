import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreator } from '../store';

const Todo = ({ text, onBtnClick, onClg, id }) => {
    return (
        <li style={{ marginBottom: '10px' }}>
            <Link to={`/${id}`} state={{ id: id }} style={{ textDecoration: 'none', color: 'black' }}>
                {text}
            </Link>
            <button
                style={{ marginLeft: '10px' }}
                onClick={() => {
                    onBtnClick();
                    onClg();
                }}
            >
                삭제
            </button>
        </li>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(actionCreator.deleteTodos(ownProps.id)),
        onClg: () => console.log(ownProps),
    };
};

export default connect(null, mapDispatchToProps)(Todo);
