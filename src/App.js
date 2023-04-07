import logo from './logo.svg';
import './App.css';
import { DataForm } from './components/dataform/DataForm';
import { Nav } from './components/nav/Nav';
import { Footer } from './components/footer/Footer';
import SignUp from './components/signup/Signup';
import Login from './components/login/Login';
import { RouteHandler } from './components/router/RouteHandler';
import { View } from './components/view/View';

function App() {
  return (
    <div className="App">
     <Nav/>
     <DataForm/>
     <Footer/>
    </div>
  );
}

export default App;
