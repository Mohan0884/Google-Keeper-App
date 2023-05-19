import './App.css';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Home/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
