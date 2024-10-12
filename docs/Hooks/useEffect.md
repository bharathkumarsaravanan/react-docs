# Experimenting with `useEffect` in React

useEffect is the React hook which is used to avoid multiple rerenders of the top level functions. In this we will give a dependencies to control when this function should rerender. Mostly initial API calls and kind of function which should happen first that kind of function we will put it here. and if we return something in this useEffect that will render when that component getting unmounted.

[Documentation](https://react.dev/reference/react/useEffect)

```javascript
import React, {useEffect, useState} from "react";

const UseEffectHook = () => {
    const [count, setCount] = useState(10);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(response => response.json())
        .then(data => {
            console.log(data.game_indices);
            setData(data.game_indices);
        });
        return () => {
            console.log("Component unmounted");
        }
    }, []);

    return (
        <div>
            <h1>UseEffect Hook</h1>
            {
                data.slice(0, count).map((item, index) => {
                    return <h3 key={index}>{item.version.name}</h3>
                })
            }
            <button onClick={() => setCount(prev => {
                return prev + 10 > data.length ? data.length : prev + 10;
            })}>Load More</button>
        </div>
    );
};

export default UseEffectHook;
```