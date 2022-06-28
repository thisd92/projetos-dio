import React from 'react';
import Button from './Button';

const App = () => {
    return(
        <>
            <header>
                <p>Bem-Vindo!</p>
                <p>Webpack + React</p>
            </header>
            <div>
                <p>Configurando e usando Webpack para fazer o bundle</p>
                <Button name="Hello!" />
            </div>
        </>
    )
}

export default App;