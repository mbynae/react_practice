import { useReducer, useCallback } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.name]: action.value,
            };
        default:
            return state;
    }
}

function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback((e) => {
        const { name, value } = e.target;

        dispatch({
            type: "CHANGE_INPUT",
            name,
            value,
        });
    }, []);
    const reset = useCallback(() => dispatch(initialForm), [initialForm]);
    return [state, onChange, reset];
}

export default useInputs;
