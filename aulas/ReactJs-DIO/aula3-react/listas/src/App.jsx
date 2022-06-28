import React from 'react';

const costumers = [
    {
        id: 1,
        name: 'Thiago'
    },
    {
        id: 2,
        name: 'Flávia'
    },
    {
        id: 3,
        name: 'Sophia'
    },
    {
        id: 4,
        name: 'Amanda'
    }
];

const App = () => {

    const renderCostumers = (costumer, index) => {
        return (
            <li key={`costumer-${costumer.id}`}>{index + 1} - {costumer.name}</li>
        );
    };

    return(
        <>
            <header>
                <p>Bem-Vindo!</p>
                <p>Aqui serão utilizadas as seguintes lições</p>
                <ul>
                    <li>Listas e Chaves</li>
                </ul>
            </header>
            <div>
                <p>Lista de Clientes</p>
                <ul>
                    <li>{costumers.map(renderCostumers)}</li>
                </ul>
            </div>
        </>
    );
};

export default App;