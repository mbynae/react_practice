import React, { useRef, useState, useMemo } from "react";
// import InputSample from "./InputSample";
import CreateUser from "./CreateUser";
import UserList from "./UserList";


function countActiveUsers(users){
    console.log("활성 사용자 수를 세는 중...");
    return users.filter((user)=>(user.active)).length;
}

function App() {
    const [inputs, setInputs] = useState({
        pokename: "",
        type: "",
        color: "",
    });

    const { pokename, type, color } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

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

    const nextId = useRef(4); //Ref 객체는 const로 선언해도 값이 바뀔 수 있음
    const nameFocus = useRef();

    const onCreate = () => {
        const user = {
            id: nextId.current,
            pokename,
            type,
            color,
        };

        setUsers(
            //[...users, user] // 배열이기 때문에 아래랑 다르게 []를 넣어야됨. 배열 또한 불변성을 지켜야 하기 때문에 원본 배열을 복사해준다.
            users.concat(user) // 다른 방법으로 concat 메서드를 사용해서 새 배열을 복사해 추가하는 방법이 있다.
        );

        setInputs({
            pokename: "",
            type: "",
            color: "",
        });
        nextId.current += 1;
        nameFocus.current.focus();
    };

    const onRemove = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const onToggle = (id) => {
        setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
    };

    const count = useMemo(()=>countActiveUsers(users), [users]);

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
