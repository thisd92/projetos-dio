import React from 'react';
import Botao from './Botao';

//const hasCostumer = true;



const App = () => {
    
    // const showCostumer = () => {
    //     if(!hasCostumer) return null;
    //     return(
    //         <div>
    //             <p>Nome do Cliente: Thiago Dutra</p>
    //         </div>
    //     );
    // };
    
    return(
        <>
            <header>
                <p>Bem-Vindo!</p>
                <p>Aqui serão utilizadas as seguintes lições</p>
                <ul>
                    <li>Renderização Condicional</li>
                </ul>
            </header>
            <Botao />
            {/* {showCostumer} */}
        </>
    );
};

export default App;