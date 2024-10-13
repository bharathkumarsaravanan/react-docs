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