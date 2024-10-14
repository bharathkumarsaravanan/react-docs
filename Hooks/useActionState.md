# Experimenting with `useActionState` in React

It is almost same as the useFormStatus hook but the approach will be different and its also the experiment hook. In this we will get a message, formAction, isPending values from the hook. We have to create a submit action and pass it to this hook first and second we will send a initial state of this form that will be null. THen we will set a form action as the formAction which will provided by the hook and the message should be the return value of the formAction. And is Pending is the loading state.

[Documentation](https://react.dev/reference/react/useActionState)

```javascript
import { useActionState } from 'react';

async function addToCart(prevState, queryData) {

        await new Promise(resolve => setTimeout(resolve, 2000));
        return "Couldn't add to cart: the item is sold out.";
}

const UseActionStateHook = () => {
    const [message, formAction, isPending] = useActionState(addToCart, null);

    return (
        <form action={formAction}>
            <span>{isPending ? "Loading..." : message}</span>
            <input type="text" name="itemID" />
            <button type="submit" disabled={isPending}>Add to Cart</button>
        </form>
    );
}

export default UseActionStateHook;

```
We should given a action for the form after that action executed only it will be available in the useActionState hook.