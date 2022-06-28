import React, { useState } from 'react';

const buttonA = <button>Histórico dos Clientes</button>;
const buttonB = <button>Cadastrar Cliente</button>;

function Botao(){
    const [hasCostumer, setCostumer] = useState(true);

    const renderBtnHistory = (
        <div>
            <p>Se houver cliente cadastrado aparecerá esse botão</p>
            {buttonA}
        </div>
    );

    const renderBtnAdd = (
        <div>
            <p>Se não houver cliente cadastrado, aparecerá esse botão</p>
            {buttonB}
        </div>
    );
    
    return(
        <>
            <div>
                <button onClick={() => setCostumer(!hasCostumer)}>
                    Clique Aqui
                </button>
            </div>
            {hasCostumer ? renderBtnHistory : renderBtnAdd}
        </>
    );
}

export default Botao;