import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true,
    },
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true,
    },
    {
        id: 3,
        text: 'Context 만들기',
        done: false,
    },
    {
        id: 4,
        text: '기능 구현하기',
        done: false,
    },
];

// 리듀서
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

//TodoProvider가 사용할 컴포넌트를 감싸서 useContext의 모든 실행문을 적용받도록 처리
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        //useContext를 분리해서 사용할 땐 이러게 provider와 value값을 부여해서 나눌 수 있다.
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext value={nextId}>{children}</TodoNextIdContext>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
};

//커스텀 훅으로 만들면 컴포넌트에서 사용할 때 좀 더 간편하고 깔끔하게 사용 가능
export const useTodoState = () => {
    const context = useContext(TodoStateContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return useContext(context);
};

export const useTodoDispatch = () => {
    const context = useContext(TodoDispatchContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return useContext(context);
};

export const useTodoNextId = () => {
    const context = useContext(TodoNextIdContext);
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return useContext(context);
};
