# Experimenting with `useTransition` in React

useTransition is the hook which is used to control the transition of the states. For example if i creating the tabs component i am in the first tab and i am going to click a second tab after clicked i changed my mind but this time i have to wait for the whole render of the tab2 to completed after compeleting render only i can switch back to my first tab right this how we work. But with this transition hook what we can do is we will wrap this tab switch state to useTransition so react will consider this as a transition. So this time we dont have to wait for that component to complete render instead we can jump back to the first tab without any interruptions. 

[Documentation](https://react.dev/reference/react/useTransition)

```javascript
import React, {useTransition, Suspense, useState} from "react";

const UseTransitionHook = () => {
  const [pending, startTransition] = useTransition();
  const [tab ,setTab] = useState("home");
  const handleClick = (tabId) => {
    startTransition(() => {
        // perform async operation
            setTab(tabId);
    });
  };
  function SlowPost({ index }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
      // Do nothing for 1 ms per item to emulate extremely slow code
    }
  
    return (
      <li className="item">
        Post #{index + 1}
      </li>
    );
  }
  const RenderTab = () => {
    switch(tab) {
        case "home":
            return <h1>Home</h1>;
        case "settings":
            let el = [];
            for (let i = 0; i < 500; i++) {
                el.push(<SlowPost index={i} />);
            }
            
            return <ol>{el}</ol>;
        case "profile":
            return <h1>Profile</h1>;
        default:
            return <h1>Home</h1>;
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="flex-box">
            <button onClick={() => handleClick("home")}>Home</button>
            <button onClick={() => handleClick("settings")}>Settings</button>
            <button onClick={() => handleClick("profile")}>Profile</button>
        </div>
        <RenderTab />
    </Suspense>
  );
}

export default UseTransitionHook;
```
In this the settings tab will take 1sec to render. In the meantime we can jump to any tabs without interrupting.