import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ state }) => {
    const ids = useParams();
    const title = state.find((todo) => todo.id === parseInt(ids.id));

    return (
        <div>
            <h1>{title.text}</h1>
            <h4>create id at {title.id}</h4>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { state };
};

export default connect(mapStateToProps)(Detail);
