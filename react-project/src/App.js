import './App.css';
import Form from './components/Form';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile';
import { Repos } from './components/Repos';

function App() {
  
  return (
    <>
      <div className="App">
        <Form />
      </div>
      <Layout>
        <Profile />
        <Repos />
      </Layout>
    </>
  );
}

export default App;
