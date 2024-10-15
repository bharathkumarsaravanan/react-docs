# Experimenting with `useState` in React
This hook is important we can't survive react without knowing this. It's used to maintain the local states. 

> The mystery behind why defining useState as const is the value of the state variable (and the setter function) itself does not change throughout the component's life cycle. However, React manages the state internally and ensures that the state updates correctly even though the reference to the state variable is constant. 

>React doesn't change the reference to the state hook itself (const [count, setCount]), but it internally keeps track of the state changes. Each time the component renders, React will "re-call" the component function and provide the updated value of the state.

     

For example, after a state update, React will:

Re-render the component.
Pass the new state value (count in this case) to the component.

And in the setter function it will provide the prev state so we can use it to access.

[Documentation](https://react.dev/reference/react/useState)

```javascript
import React, {useState} from "react";

const UseStateHook = () => {
    const [userDetails, setUserDetails] = useState({});

    const updateDetails = (e) => {
        const {name, value} = e.target;
        setUserDetails(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    return (
        <div>
            <h2>useState Hook</h2>
            <div>
                <input type="text" placeholder="Enter your name" name="name" value={userDetails.name || ""} onChange={updateDetails} />
                <input type="number" placeholder="Enter your age"  name="age" value={userDetails.age || ""} onChange={updateDetails} />
                <input type="text" placeholder="Enter your city" name="city" value={userDetails.city || ""} onChange={updateDetails} />
            </div>
            <div>
                <h2>User Details</h2>
                <p>Name: {userDetails.name}</p>
                <p>Age: {userDetails.age}</p>
                <p>City: {userDetails.city}</p>
            </div>
        </div>
    )
};

export default UseStateHook;
```

