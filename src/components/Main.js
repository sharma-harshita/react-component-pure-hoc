import React from "react";
import UserHOC from "./UserHOC";

const Main = (props) => {
    console.log(props.value, "*****PROPS****");
    return (
        <div>
            <h1>HEADING</h1>
            <h1>DATE COMING FROM HOC {props.value.name}</h1>
        </div>
    )
}

export default UserHOC(Main)