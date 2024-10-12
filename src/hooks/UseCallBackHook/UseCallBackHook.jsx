// src/CallbackDemo.js
import React, { useState, useCallback } from 'react';
import Child from './Child';

const UseCallBackHook = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    debugger
    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, [toggle]); // Change dependency

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <Child onIncrement={increment} />
            <button onClick={() => setToggle(prev => !prev)}>Toggle</button>
        </div>
    );
};

export default UseCallBackHook;
