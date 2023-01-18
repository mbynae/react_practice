//Context Api를 사용해서 전역관리 하는 방법

import React, { useReducer, useMemo } from "react";
import CreateUser2 from "./CreateUser2";
import UserList2 from "./UserList2";

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

export const UserDispatch = React.createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state;

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser2 />
            <UserList2 users={users} />
            <div>활성된 이름 수: {count}</div>
        </UserDispatch.Provider>
    );
}

export default App;
