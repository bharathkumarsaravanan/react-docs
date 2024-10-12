# Experimenting with `useContext` in React

useContext is the React hook which is used to provide a states across the child components to avoid prop drilling. Let me explain the situation, we are in a parent component from this component we need to send one prop to child of the child component. Basically how we used to handle this situation is we will send that prop to child component from that child component we will send that prop to child of that child component. It is called Prop Drilling. To prevent this we will use this method to give a access to that child of child component to access the state from parent component.

[Documentation](https://react.dev/reference/react/useContext)

> useContextHook.js

```javascript
import React, {useContext, createContext, useState} from "react";
import Child from "./Child";

const AuthDetails = createContext({});

const UseContextHook = () => {
    const [auth, setAuth] = useState({name: "John Doe", email: "johndoe@gmail.com"});

    return (
        <AuthDetails.Provider value={auth}>
            <>
            <Child />
            <button onClick={() => setAuth({name: "BruceWayne", email: "brucewayne@waynelimited.com"})}>Update</button>
            </>
        </AuthDetails.Provider>
    );
}

export const AuthDetailsContext = () => useContext(AuthDetails);
export default UseContextHook;
```

In this we have created the context that work like a state and wrapped my child component with that context wrapper so every components under this wrapper could access the state of this context. Initial value of the context is which is i have given in the useState state that will used to update if it needs. Then i have exported the useContext callback to let the child access the states by importing this.

> Child.js

```javascript
import React, {useContext} from "react";
import { AuthDetailsContext } from "./UseContextHook";

const Child = () => {
    const auth = AuthDetailsContext();
    return (
        <div>
            <p>Name: {auth.name}</p>
            <p>Email: {auth.email}</p>
        </div>
    );
}

export default Child;
```

It is the child component where i used to access that states which i have created in the parent. This is how we should use.