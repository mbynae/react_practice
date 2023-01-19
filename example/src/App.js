import React, { useState, useRef } from "react";
import CreateUser from "./include/CreateUser";
import UserList from "./include/UserList";

function activeCount(users){
	return users.filter((user)=>(

		
	))
};

function App() {
    const [inputs, setInputs] = useState({
        pokename: "",
        type: "",
        color: "",
    });

    const { pokename, type, color } = inputs;
    const nextId = useRef(4);
    const inputFocus = useRef();

    const [users, setUsers] = useState([
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
    ]);

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onCreate = () => {
        const user = {
            id: nextId.current,
            pokename: pokename,
            type: type,
            color: color,
            active: false,
        };
        setUsers([...users, user]);
        setInputs({
            pokename: "",
            type: "",
            color: "",
        });
        nextId.current++;
        inputFocus.current.focus();
    };

    const onRemove = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const onToggle = (id) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
    };

	const count = activeCount(users);

    return (
        <>
            <CreateUser pokename={pokename} type={type} color={color} inputFocus={inputFocus} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성화 된 이름 수: 0</div>
        </>
    );
}

export default App;
