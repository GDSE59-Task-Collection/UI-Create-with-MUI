import logo from './logo.svg';
import './App.css';
import { DataForm } from './components/dataform/DataForm';
import { Nav } from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
     <DataForm/>
    </div>
  );
}

export default App;
