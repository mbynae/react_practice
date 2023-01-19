import React, { useContext } from "react";
import { UserDispatch } from "./App5";

const User = React.memo(({ user }) => {
    const dispatch = useContext(UserDispatch);

    return (
        <div style={{ fontSize: "20px" }}>
            <b
                style={{ cursor: "pointer", color: user.active ? `${user.color}` : "black" }}
                onClick={() => {
                    dispatch({ type: "TOGGLE_USER", id: user.id });
                }}
            >
                {user.pokename}:
            </b>
            <span style={{ color: `${user.color}` }}>{user.type}타입</span>
            <button
                onClick={() => {
                    dispatch({ type: "REMOVE_USER", id: user.id });
                }}
            >
                삭제
            </button>
        </div>
    );
});

const UserList = ({ users }) => {
    return (
        <>
            {users.map((user, index) => (
                <User key={index} user={user} />
            ))}
        </>
    );
};

export default React.memo(UserList);
