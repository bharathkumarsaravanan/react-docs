# Experimenting with `useTransition` in React
This hook is mostly we can use in search fields. User will type something in input field based on the value we will render something below. But the thing is we dont want to rerender every single letters so with this component it will be tracked once user stop typing in the field. Example if user type "sample" in the input field we dont want to render for every single letter like "s" "a" "m" "p" "l" "e". Instead we will do the thing after user typed "sample" in the input field. 

```javascript
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
```

This is how we will use useDeferredValue hook by simply passing the state.