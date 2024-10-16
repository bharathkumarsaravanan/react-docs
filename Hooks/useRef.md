# Experimenting with `useActionState` in React
useRef is the simple hook which is used to manipulate the dom element. useRef returns a ref object with a single current property initially set to the initial value you provided.

On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.

Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property.

[Documentation](https://react.dev/reference/react/useRef)

```javascript
import React, {useRef} from "react";

const UseRefHook = () => {

    const inputRef = useRef(null);

    return (
        <div>
            <h2>useRef Hook</h2>
            <input type="text" ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>Focus Input</button>
        </div>
    )

};

export default UseRefHook;
```
In this the button click is make the input focussed. Simple and powerful.
