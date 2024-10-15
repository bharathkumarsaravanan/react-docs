import React, {Suspense, useDeferredValue, useState} from "react";

const ExpensiveComponent = ({ value }) => {
    const startTime = performance.now();
    
    // This loop is just to simulate an expensive computation
    while (performance.now() - startTime < 200) {
      // Doing nothing, just wasting time
    }
    console.log("ExpensiveComponent rendered", value);
    
    return <h1>{value}</h1>;
  };

const UseDeferredValueHook = () => {
    const [text, setText] = useState("");
    const deferredText = useDeferredValue(text);
    
    return (
        <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <Suspense fallback={<h1>Loading...</h1>}>
            <ExpensiveComponent value={deferredText} />
        </Suspense>
        </div>
    );
};

export default UseDeferredValueHook;