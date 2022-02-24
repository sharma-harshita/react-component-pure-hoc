import React from "react";

function UserHOC (WrappedComponent) {
    // return a new component
    const WrappingComponent = () => {
        const user = {id:1,name:"Harsh"};
        return(
            <div>
            <WrappedComponent value = {user}/>
            </div>
            )
        }
    return WrappingComponent
}

export default UserHOC