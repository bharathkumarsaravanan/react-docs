import React, { useContext } from "react";
import { AuthDetails } from "./UseContextHook";

const Child = () => {
  const auth = useContext(AuthDetails);
  alert(auth, "ds");
  return (
    <div>
      <p>Name: {auth.name}</p>
      <p>Email: {auth.email}</p>
    </div>
  );
};

export default Child;
