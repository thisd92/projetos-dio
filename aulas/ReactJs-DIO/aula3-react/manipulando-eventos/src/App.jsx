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

const showEvent = (e) => {
    console.log('Click');
    console.log(e);
};


const Button = <button onClick={showEvent}>Mostrar Evento</button>;

const App = () => {
    
    const handleClick = (e, id, name) => {
        console.log(`Deletar Cliente ${name}`);
        alert(`Id do Cliente ${id}`);
    };

    const renderCostumers = (costumer, index) => {
        return (
            <li key={`costumer-${costumer.id}`}>{index + 1} - {costumer.name} 
                <button onClick={(e) => 
                    handleClick(e, costumer.id, costumer.name)}>Deletar Cliente</button>
            </li>
        );
    };

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
    };

    return(
        <>
            <header>
                <p>Bem-Vindo!</p>
                <p>Aqui serão utilizadas as seguintes lições</p>
                <ul>
                    <li>Eventos</li>
                </ul>
            </header>
            <div>
                <input onChange={handleChange} />
                <br/>
                {Button}
            </div>
            <div>
                <p>Lista de Clientes</p>
                <ul>
                    {costumers.map(renderCostumers)}
                </ul>
            </div>
        </>
    );
};

export default App;