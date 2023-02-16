import React, { useState } from 'react';
import useInterval from './useInterval';

const App2 = () => {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(count + 1);
    }, 1000);

    return <div>{count}</div>;
};

export default App2;
