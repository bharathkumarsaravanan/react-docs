# Experimenting with `useFormStatus` in React

useFormStatus is the experiment hook which is not get released yet. Its used to get the status and datas of the form which is submited last. Here we can get form pending, data, method, action. All those things we can access from here. 

[Documentation](https://react.dev/reference/react/useFormStatus)

```javascript
import React from "react";
import {useFormStatus} from "react-dom";

const UseFormActionHook = () => {

    const Submit = () => {
        const {pending, data} = useFormStatus();

        return (
            <>  
                <span>{pending && "loading" && console.log("loading", data.get('itemID'))}</span>
                <input type="text" name="itemID"/>
                <button type="submit" disabled={pending}>Add to Cart</button>
            </>
        )
    }

    const handleSubmit = (e) => {
        console.log('Form Submitted');
    }

    return (
        <form action={handleSubmit}>
            <Submit/>
        </form>
    )
};

export default UseFormActionHook;
```
We should given a action for the form after that action executed only it will be available in the useFormStatus hook. we can get the data of the form by giving get statements.