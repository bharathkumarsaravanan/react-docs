# Experimenting with `useId` in React

useId is the hook to create a random id for the our use cases nothing else.

[Documentation](https://react.dev/reference/react/useId)


```javascript
import React, {useId} from "react";

const UseIdHook = () => {
    const id = useId();
    const id2 = useId();

    return (
        <div>
            <h1>UseId Hook</h1>
            <p>Id: {`${id}, ${id2}`}</p>
        </div>
    );
};

export default UseIdHook;
```
