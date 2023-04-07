import logo from './logo.svg';
import './App.css';
import { DataForm } from './components/dataform/DataForm';
import { Nav } from './components/nav/Nav';
import { Footer } from './components/footer/Footer';
import SignUp from './components/signup/Signup';

function App() {
  return (
    <div className="App">
      <Nav/>
     <SignUp/>
     <Footer/>
    </div>
  );
}

export default App;
