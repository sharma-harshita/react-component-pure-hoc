import React, {memo} from "react";

const PureChild2 = (props) => {
    console.log("This is PureChild2 : Functional");
    return(
        <div>
            <h1>PureChild2 : Functional {props.name}</h1>
        </div>
    )
}

export default memo(PureChild2)


