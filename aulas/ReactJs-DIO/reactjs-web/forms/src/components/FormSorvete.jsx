import React, { Component } from "react";

class FormSorvete extends Component{
    constructor(props){
        super(props)

        this.state = {
            sabor: 'abacaxi',
            casquinha: true,
            guardanapo: 'sim'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    
    
    handleSubmit(e){
        const {sabor, casquinha, guardanapo } = this.state
        e.preventDefault();
        alert("Sabor escolhido: " + sabor + " Guardanapo: " + guardanapo + " Casquinha: " + casquinha);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Escolha o sabor
                        <select name="sabor" id="">
                            <option value="flocos">Flocos</option>
                            <option value="abacaxi">Abacaxi</option>
                            <option value="morango">Morango</option>
                            <option value="chocolate">Chocolate</option>
                            <option value="uva">Uva</option>
                            <option value="coco">Coco</option>
                            <option value="limao">Limão</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Casquinha?
                        <input type="checkbox" name="casquinha" checked={this.state.casquinha} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Guardanapo?
                        <div>
                            <label>
                                Sim
                                <input type="radio" name="guardanapo" checked={this.state.guardanapo === "sim"} value="sim" onChange={this.handleChange} /> 
                            </label>
                        </div>
                        <div>
                            <label>
                                Não
                                <input type="radio" name="guardanapo" checked={this.state.guardanapo === "nao"} value="nao" onChange={this.handleChange} />
                            </label>
                        </div>
                    </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default FormSorvete;