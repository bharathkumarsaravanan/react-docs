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