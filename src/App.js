import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Documents from './pages/documents';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/documents' element={<Documents/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
