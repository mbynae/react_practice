import React, { useState } from "react";

const Home = () => {
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    };

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} placeholder="할 일을 입력해주세요." required onChange={onChange} />
                <button>추가</button>
            </form>
            <ul></ul>
        </>
    );
};

export default Home;
