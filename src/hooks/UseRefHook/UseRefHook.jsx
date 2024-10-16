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