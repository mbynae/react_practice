import React, { useState, useRef, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

const activeSearch = (pokemons) => {
    return pokemons.filter((pokemon) => pokemon.active).length;
};

const App = () => {
    const [inputs, setInputs] = useState({
        pokename: '',
        type: '',
        color: '',
    });
    const nextId = useRef(4);
    const focusOn = useRef();

    const [pokemons, setPokemons] = useState([
        {
            id: 1,
            pokename: '이상해씨',
            type: '풀',
            color: 'green',
            active: true,
        },
        {
            id: 2,
            pokename: '파이리',
            type: '불',
            color: 'red',
            active: false,
        },
        {
            id: 3,
            pokename: '꼬부기',
            type: '물',
            color: 'blue',
            active: false,
        },
    ]);

    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setInputs({ ...inputs, [name]: value });
        },
        [inputs],
    );

    const onSubmit = (e) => {
        e.preventDefault();
        const { pokename, type, color } = inputs;
        const pokemon = {
            id: nextId.current,
            pokename: pokename,
            type: type,
            color: color,
            active: false,
        };

        setPokemons([...pokemons, pokemon]);
        setInputs({
            pokename: '',
            type: '',
            color: '',
        });

        nextId.current++;
        focusOn.current.focus();
    };

    const onRemove = useCallback(
        (id) => {
            setPokemons(pokemons.filter((pokemon) => pokemon.id !== id));
        },
        [pokemons],
    );

    const onToggle = useCallback(
        (id) => {
            setPokemons(pokemons.map((pokemon) => (pokemon.id === id ? { ...pokemon, active: !pokemon.active } : pokemon)));
        },
        [pokemons],
    );

    const count = useMemo(() => activeSearch(pokemons), [pokemons]);

    return (
        <>
            <CreateUser {...inputs} onChange={onChange} onSubmit={onSubmit} focusOn={focusOn} />
            <UserList pokemons={pokemons} onRemove={onRemove} onToggle={onToggle} />
            <div>활성화된 이름 수: {count}</div>
        </>
    );
};

export default App;
