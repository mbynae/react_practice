//Immer를 사용한 불변성 관리

import React, { useReducer, useMemo } from "react";
import CreateUser2 from "./CreateUser2";
import UserList2 from "./UserList2";
import produce from "immer";

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
            return produce(state, (draft) => {
                draft.users.push(action.user);
            });

        case "REMOVE_USER":
            return produce(state, (draft) => {
                const index = draft.users.findIndex((user) => user.id === action.id);
                draft.users.splice(index, 1);
            });

        case "TOGGLE_USER":
            return produce(state, (draft) => {
                const user = draft.users.find((user) => user.id === action.id);
                user.active = !user.active;
            });
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
