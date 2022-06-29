import React, { Component } from "react";

class FormFile extends Component{
    constructor(props){
        super(props)

        this.state = { value: '' }
        this.fileInput = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this)

    }
    
    handleSubmit(e){
        e.preventDefault();
        alert(`Arquivo selecionado - ${this.fileInput.current.files[0].name}`);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Arquivo:
                    <input type="file" ref={this.fileInput}/>
                </label>
                <br />
                <input type="submit" value="Enviar"/>
            </form>

        )
    }
}

export default FormFile;