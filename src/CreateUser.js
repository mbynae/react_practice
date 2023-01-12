import React from "react";

const CreateUser = ({ pokename, type, color, onChange, onCreate, nameFocus }) => {
    return (
        <div style={{ marginBottom: "10px" }}>
            <input name="pokename" placeholder="포켓몬 이름" onChange={onChange} value={pokename} ref={nameFocus} />
            <input name="type" placeholder="타입명" onChange={onChange} value={type} />
            <input name="color" placeholder="색깔" onChange={onChange} value={color} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default CreateUser;
