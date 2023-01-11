import React from 'react'

const User = ({user}) => {
    return(
        <div>
            <b>{user.name}: </b> <span style={{color: `${user.color}`}}>{user.type}타입</span>
        </div>
    );
}

const UserList = () => {
    const users = [
        {
            id: 1,
            name: "이상해씨",
            type: "풀",
            color: "green"
        },
        {
            id: 2,
            name: "파이리",
            type: "불",
            color: "red"
        },
        {
            id: 3,
            name: "꼬부기",
            type: "물",
            color: "blue"
        },
    ];

    return (
        <>
            {users.map((user, index)=>(
                <User key={index} user={user} />
            ))}
        </>
    )
}

export default UserList