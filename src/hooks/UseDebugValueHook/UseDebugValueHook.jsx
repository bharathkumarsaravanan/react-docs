import React, { useState, useDebugValue } from "react";

// Create a custom hook
const useCustomDebugValue = (value) => {
    useDebugValue(value, Boolean);
    return value;
};

const UseDebugValueHook = () => {
    const [online, setOnline] = useState(false);
    
    // Use the custom hook
    const debuggedValue = useCustomDebugValue(online);

    return (
        <div>
            <h1>UseDebugValue Hook</h1>
            <p>Status: {debuggedValue? "Online" : "Offline"}</p>
            <button onClick={() => setOnline(prev => !prev)}>Toggle</button>
        </div>
    );
};

export default UseDebugValueHook;
