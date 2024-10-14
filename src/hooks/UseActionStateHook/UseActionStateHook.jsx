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
