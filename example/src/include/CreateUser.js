import React from "react";

const CreateUser = ({ pokename, type, color, onChange, onCreate, inputFocus }) => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <input type="text" name="pokename" value={pokename} placeholder="포켓몬 이름을 작성" ref={inputFocus} onChange={onChange} />
            <input type="text" name="type" value={type} placeholder="타입을 작성" onChange={onChange} />
            <input style={{ marginRight: "5px" }} type="text" name="color" value={color} placeholder="색깔(영어)을 작성" onChange={onChange} />
            <button style={{ cursor: "pointer" }} onClick={onCreate}>
                등록
            </button>
        </div>
    );
};

export default CreateUser;
