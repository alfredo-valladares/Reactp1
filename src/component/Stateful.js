import React, {Component} from 'react';
import '../App.css';


class Stateful extends Component{

    constructor(props){
        super(props);
            this.state = {
                nombre: 'Jose Alfredo'
            };
    }


    render(){
    return <h2 class="fas fa-h2 "> {this.state.nombre}</h2>
    }

}

export default Stateful;