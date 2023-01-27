import React from 'react';

const Pokemon = React.memo(({ id, pokename, type, color, active, onRemove, onToggle }) => {
    return (
        <li>
            <b style={{ color: active ? color : 'black', cursor: 'pointer' }} onClick={() => onToggle(id)}>
                {pokename}
            </b>
            : <span style={{ color: color }}>{type}타입</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </li>
    );
});

const UserList = ({ pokemons, onRemove, onToggle }) => {
    return (
        <div className="pokeList">
            {pokemons.map((pokemon) => (
                <Pokemon key={pokemon.id} {...pokemon} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default React.memo(UserList);
