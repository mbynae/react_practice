//useReducer에서 커스텀훅을 사용한 방식. useInputs는 useState, useInputs2는 useReducer

import React, { useRef, useReducer, useMemo, useCallback } from "react";
// import InputSample from "./InputSample";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import useInputs2 from "./Hooks/useInputs2";

function countActiveUsers(users) {
    console.log("활성 사용자 수를 세는 중...");
    return users.filter((user) => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            pokename: "이상해씨",
            type: "풀",
            color: "green",
            active: true,
        },
        {
            id: 2,
            pokename: "파이리",
            type: "불",
            color: "red",
            active: false,
        },
        {
            id: 3,
            pokename: "꼬부기",
            type: "물",
            color: "blue",
            active: false,
        },
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case "CREATE_USER":
            return {
                users: state.users.concat(action.user),
            };
        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id),
            };
        case "TOGGLE_USER":
            return {
                ...state,
                users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
            };
        default:
            return state;
    }
}

function App() {
    const [{ pokename, type, color }, onChange, reset] = useInputs2({
        pokename: "",
        type: "",
        color: "",
    });
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);
    const nameFocus = useRef();
    const { users } = state;

    const onCreate = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                pokename,
                type,
                color,
            },
        });
        reset();
        nextId.current++;
        nameFocus.current.focus();
    }, [pokename, type, color, reset]);

    const onRemove = useCallback((id) => {
        dispatch({
            type: "REMOVE_USER",
            id,
        });
    }, []);

    const onToggle = useCallback((id) => {
        dispatch({
            type: "TOGGLE_USER",
            id,
        });
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            {/* <InputSample /> */}
            <CreateUser pokename={pokename} type={type} color={color} onChange={onChange} onCreate={onCreate} nameFocus={nameFocus} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성된 이름 수: {count}</div>
        </>
    );
}

export default App;
