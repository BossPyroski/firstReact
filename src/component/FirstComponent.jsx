import React, { Component } from 'react';


class FirstComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age 
        }
    }
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        // this method goes inside of the LightSwitch Component
    
    
    return(
        <div>
            <h1> {lastName}, {firstName} </h1>
            <h3> Age: {this.state.age} </h3>
            <h4> Hair Color:{hairColor} </h4>
            <button onClick={ ()=> this.setState({age:this.state.age+1 })}>Happy Bday!</button>
        </div>
        );

    }
}

export default FirstComponent;


// class LightSwitch extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             position: "On"
//         };
//     }
    
//     render() {
//         return (
//             <fieldset>
//                 <p>The light is currently { this.state.position }</p>
//                 <button>Flip Switch</button>
//             </fieldset>
//         );
//     }
// }
                
// export default LightSwitch;
