import './App.css';

const soma = (a, b) => a + b
const name = 'Thiago'

function App() {
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Hello, {name}</h1>
        </header>
      </div>
      <div>
        <p>
          Vamos fazer uma soma?<br/>
          5 + 5 = {soma(5, 5)}
        </p>
      </div>
    </div>
  );
}

export default App;
