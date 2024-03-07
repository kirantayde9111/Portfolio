
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Navbar from './component/Navbar';
import Sociallink from './component/Sociallink';
import Portfolio from './component/Portfolio';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Sociallink/>
    </div>
    
    
  );
}

export default App;
