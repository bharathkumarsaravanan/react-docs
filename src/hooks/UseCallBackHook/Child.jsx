// src/Child.js
import React from 'react';

const Child = React.memo(({ onIncrement }) => {
    console.log('Child component rendered');
    return <button onClick={onIncrement}>Increment from Child</button>;
});

export default Child;
