import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends Component{
    
    constructor(props){
        super (props)
        
        this.state = {
            clock: 1000,
            copo: 'agua'
        }
    }
  
    componentDidMount(){
      this.setState({
        copo: 'suco'
      })
    }
  
    alterarCopo = () =>{
        this.setState({
            copo: 'refrigerante'
        })
    }
  
    render(){
        const {clock} = this.state
        return(
            <div>
                <h1>Relógio: {this.state.clock}</h1>
                <button onClick={() => this.alterarCopo()}>{copo}</button>
            </div>
        )
    }
  }

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
