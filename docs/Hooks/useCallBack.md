# Experimenting with `useCallback` in React

UseCallBack is the react hook which is used to catch the functions and prevent that load from every rerenders. 
By default every functions in the React file will rerender every line of function and update the memory of the 
catch. To prevent that we have to wrap that function with useCallback and we can give dependencies for that 
so we can control the functions to when it should update the catch.

[Documentation](https://react.dev/reference/react/useCallBack)

> UseCallBackHook.jsx
```javascript
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

```
It is the parent file I used to create a callback function with the dependency of toggle state. That function is called Increment and applied
for both this component and sent it to child component. When this function is rerendered then the child component also get rerender right?. That is how react works. By default the increment function will update for the every renders so the reason of increnment function memory updation the child component will be rerender every single time even if its no need. To prevent that we have wrap that function by useCallback and given a dependency of toggle state. So if the toggle button is clicked then only that function will be rerender and memory of that function will update. Then child component will rerender. This is how we can prevent unwanted rerenders.

> Child.jsx
```javascript
// src/Child.js
import React from 'react';

const Child = React.memo(({ onIncrement }) => {
    console.log('Child component rendered');
    return <button onClick={onIncrement}>Increment from Child</button>;
});

export default Child;

```

console.log to check the rerenders.


