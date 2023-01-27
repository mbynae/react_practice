import React from 'react';

const CreateUser = ({ pokename, type, color, onChange, onSubmit, focusOn }) => {
    return (
        <form id="create" onSubmit={onSubmit}>
            <input type="text" name="pokename" placeholder="포켓몬 이름" value={pokename} onChange={onChange} ref={focusOn} required />
            <input type="text" name="type" placeholder="타입" value={type} onChange={onChange} required />
            <input type="text" name="color" placeholder="색깔" value={color} onChange={onChange} required />
            <button>추가</button>
        </form>
    );
};

export default React.memo(CreateUser);
