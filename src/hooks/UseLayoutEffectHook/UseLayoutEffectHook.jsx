import React, {useLayoutEffect, useRef} from "react";

const UseLayoutEffectHook = () => {
    const btnRef = useRef(null);
    const [tooltipWidth, setTooltipWidth] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const btnVal = "Sample button to experiment the layout effect hook"

    useLayoutEffect(() => {
        const {top, left} = btnRef.current.getBoundingClientRect();
        setTooltipWidth({top, left});
        console.log(btnRef.current.getBoundingClientRect());
    }, []);

    const toolTipStyle = {
        position: "absolute",
        backgroundColor: "black",
        color: "white",
        padding: "5px 8px",
        borderRadius: "5px",
        display: show ? "block" : "none",
        top: tooltipWidth.top - 30,
        left: tooltipWidth.left,
        fontSize: "12px"
    }

    return (
        <div>
            <div style={toolTipStyle}>{btnVal}</div>
            <button ref={btnRef} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >{btnVal}</button>
        </div>
    )


};

export default UseLayoutEffectHook;