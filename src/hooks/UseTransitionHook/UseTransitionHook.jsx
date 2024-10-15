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