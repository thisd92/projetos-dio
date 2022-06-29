import React, { Component } from "react";

class FormName extends Component{
    constructor(props){
        super(props);

        this.state = { value: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({ value: e.target.value });
    }
    
    handleSubmit(e){
        e.preventDefault();
        alert(`O nome enviado foi ${this.state.value}`);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormName;