
import './App.css';
import  Nav  from './components/nav/Nav';
import { Footer } from './components/footer/Footer';
import { RouteHandler } from './components/router/RouteHandler';


function App() {
  return (
    <div className="App">
     <Nav/>
      <RouteHandler/>
     <Footer/>
    </div>
  );
}

export default App;
