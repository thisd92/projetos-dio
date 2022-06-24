import React from "react";
import './button.css'

function Button(props){

    const {button, onClick} = props

    return(
        <div className="container btn">
            <h3>Inserindo botão com Props</h3>
            <p>Clique para somar 5 + 5 </p>
            <button onClick={onClick}>{button}</button>
        </div>
    )
}

export default Button