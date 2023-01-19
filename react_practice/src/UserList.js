import React from "react";
// import React, { useEffect } from "react";

const User = React.memo(({ user, onRemove, onToggle }) => {
    // useEffect(() => {
    //     console.log(user);
    // }, [user]);

    return (
        <div style={{ fontSize: "20px" }}>
            <b style={{ cursor: "pointer", color: user.active ? `${user.color}` : "black" }} onClick={() => onToggle(user.id)}>
                {user.pokename}:
            </b>
            <span style={{ color: `${user.color}` }}>{user.type}타입</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

const UserList = ({ users, onRemove, onToggle }) => {
    return (
        <>
            {users.map((user, index) => (
                <User key={index} user={user} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </>
    );
};

export default React.memo(UserList);
