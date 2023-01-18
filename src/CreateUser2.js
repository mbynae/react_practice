import React, { useContext, useRef } from "react";
import useInputs2 from "./Hooks/useInputs2";
import { UserDispatch } from "./App5";

const CreateUser = () => {
    const [{ pokename, type, color }, onChange, reset] = useInputs2({
        pokename: "",
        type: "",
        color: "",
    });
    const nextId = useRef(4);
    const nameFocus = useRef();

    const dispatch = useContext(UserDispatch);

    const onCreate = () => {
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
    };

    return (
        <div style={{ marginBottom: "10px" }}>
            <input name="pokename" placeholder="포켓몬 이름" onChange={onChange} value={pokename} ref={nameFocus} />
            <input name="type" placeholder="타입명" onChange={onChange} value={type} />
            <input name="color" placeholder="색깔" onChange={onChange} value={color} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default React.memo(CreateUser);
