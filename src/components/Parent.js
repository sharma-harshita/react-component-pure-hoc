import React from "react";
import PureChild1 from "./PureChild1";
import PureChild2 from "./PureChild2";

class Parent extends React.Component {
    constructor(){
        super()
        this.state = {
            name:"John"
        }
    }

    componentDidMount () {
        setInterval(() => {
            this.setState({
                name:"DOE"
            })
        }, 5000);
    }

    render(){
        return(
            <div>
                <PureChild1 name={this.state.name}/>
                <PureChild2 name={this.state.name}/>
            </div>
        )
    }
}

export default Parent