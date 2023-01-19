import React from "react";

const User = ({ id, pokename, type, color, active, onRemove, onToggle }) => {
    return (
        <div style={{ fontSize: "20px" }}>
            <b style={{ color: active ? color : "black", cursor: "pointer" }} onClick={() => onToggle(id)}>
                {pokename}:{" "}
            </b>
            <span style={{ color: color, marginRight: "10px" }}>{type}타입</span>
            <button style={{ cursor: "pointer" }} onClick={() => onRemove(id)}>
                삭제
            </button>
        </div>
    );
};

const UserList = ({ users, onRemove, onToggle }) => {
    return users.map((user) => <User key={user.id} id={user.id} pokename={user.pokename} type={user.type} color={user.color} active={user.active} onRemove={onRemove} onToggle={onToggle} />);
};

export default UserList;
