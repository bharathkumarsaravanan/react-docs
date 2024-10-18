# Experimenting with `createContext` API in React

This is just used to create a wrapper to provide a context element which is used to share a context using useContext hook. As we seen before in [useContext](https://react.dev/reference/react/useContext) hook its just used for the same purpose.

[Documentation](https://react.dev/reference/react/createContext)

> UseContextHook.jsx

```javascript
import React, { useContext, createContext, useState } from "react";
import Child from "./Child";

const AuthDetails = createContext({});

const UseContextHook = () => {
  const [auth, setAuth] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
  });

  return (
    <AuthDetails.Provider value={auth}>
      <>
        <Child />
        <button
          onClick={() =>
            setAuth({
              name: "BruceWayne",
              email: "brucewayne@waynelimited.com",
            })
          }
        >
          Update
        </button>
      </>
    </AuthDetails.Provider>
  );
};

export const AuthDetailsContext = () => useContext(AuthDetails);
export default UseContextHook;
```

> Child.jsx

```javascript
import React, { useContext } from "react";
import { AuthDetailsContext } from "./UseContextHook";

const Child = () => {
  const auth = useContext(AuthDetailsContext());
  return (
    <div>
      <p>Name: {auth.name}</p>
      <p>Email: {auth.email}</p>
    </div>
  );
};

export default Child;
```
