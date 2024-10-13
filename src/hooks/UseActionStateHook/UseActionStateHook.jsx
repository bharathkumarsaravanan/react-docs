import useActionState from './UseActionStateHook';

async function addToCart(prevState, queryData) {
    const itemID = queryData.get('itemID');
    if (itemID === "1") {
        return "Added to cart";
    } else {
        // Add a fake delay to make waiting noticeable.
        await new Promise(resolve => setTimeout(resolve, 2000));
        return "Couldn't add to cart: the item is sold out.";
    }
}

const UseActionStateHook = () => {
    const [message, formAction, isPending] = useActionState(addToCart, null);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(event.target);
        formAction(null, formData); // Call formAction with current state and form data
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isPending ? "Loading..." : message}</h2>
            <input type="hidden" name="itemID" value={"1"} />
            <button type="submit" disabled={isPending}>Add to Cart</button>
        </form>
    );
}

export default UseActionStateHook;
