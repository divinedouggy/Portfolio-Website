import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
