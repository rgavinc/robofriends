import React from "react";

const Scroll = ({ children }) =>
    <div
        style={{ overflowY: "scroll", border: "5px solid black", height: "800px" }}
    >
        {children}
    </div>



export default Scroll;