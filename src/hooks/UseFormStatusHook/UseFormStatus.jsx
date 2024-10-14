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