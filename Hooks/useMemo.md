# Experimenting with `useMemo` in React

useMemo is the hook to cache the calculation results. It almost same like useCallback but the difference is useCallback is caching the whole function but this caching the result of the function. Let me explain with an example in our component if we need some calculation and we wrote that calculation in that it will render everytime when component getting rendered. To prevent this we will wrap this calculation with useMemo hook and as we know here also we can give a dependencies to control the calculation renders.

[Documentation](https://react.dev/reference/react/useMemo)

```javascript
import React, { useMemo, useState } from 'react';

const UseMemoHook = () => {
    const [dep, setDep] = useState(false);
    const [sample, setSample] = useState(false)

    const memoizedValue = useMemo(() => {
        console.log('Memoized Value');
        return Math.random();
    }, [dep]);

    // const memoizedValue = (() => {
    //     console.log('Memoized Value');
    //     return Math.random();
    // })();

    return (
        <>
            <span>Random num = {memoizedValue} </span>
            <button onClick={() => setDep(prev => !prev)}>Dep Update</button>
            <button onClick={() => setSample(prev => !prev)}>Sample Update</button>
        </>

    )
};

export default UseMemoHook;
```
In this i have variable memoizedValue which will store the random number. If i created that like the commented code its getting rerendered everytime and i could see the value of the memoizedValue variable is changing every rerender for no need. To pretend that i wrapped that with useMemo and given the dependency state. So only if there is any changes in dep state only the random number will update.