import { useReducer, useCallback } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                [action.name]: action.value,
            };
        case "reset":
            return Object.keys(state).reduce((acc, cur)=>{
                acc[cur] = '';
                return acc;
            }, {});
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;

        dispatch({
            type: "CHANGE",
            name,
            value,
        });
    }, []);
    const reset = useCallback(() => dispatch({type: "reset"}), []);
    return [state, onChange, reset];
}

export default useInputs;
