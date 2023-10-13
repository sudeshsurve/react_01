import React, { useState } from "react";

function Apple() {
    const [data, setData] = useState(0)
    let [show, showDta] = useState(true)
    const updateState = () => {
        setData(data + 1)
    } 

    const toggle = () => {
        showDta(show = !show)
    }   

    return (
        <div>
            {show ? <h1>{data}</h1> : null}
            <button onClick={updateState}>update</button>
            <button onClick={toggle}>toggel</button>
        </div>
    )
}

export default Apple