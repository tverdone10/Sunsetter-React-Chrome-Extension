import React from "react";
import { render } from "react-dom"

function Popup() {
    return (
        <div>
            <h1>Hello Sunshine!</h1>
            <p>Idk what to put here yet</p>
        </div>
    )
}

render(<Popup />, document.getElementById("react-target"))