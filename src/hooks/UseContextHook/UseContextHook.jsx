import React, { useContext, createContext, useState } from "react";
import Child from "./Child";

export const AuthDetails = createContext({});

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

export default UseContextHook;
