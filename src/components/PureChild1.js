import React from "react";

class PureChild1 extends React.PureComponent{
    render(){
        console.log("THIS IS PureChild1 : CLASS");
        return( 
            <div>
                <h1>PureChild1 : CLASS COMPONENT {this.props.name}</h1>
            </div>
        )
    }
}

export default PureChild1;