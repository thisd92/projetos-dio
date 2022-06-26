function Hello(props) {
    const { name } = props
      return (
        <div className="App">
          <header className="App-header">
            <h1>Hello, {name}</h1>
          </header>
        </div>      
    );
  }
  
  export default Hello;
  