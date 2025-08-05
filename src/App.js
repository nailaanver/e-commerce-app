import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Header from './components/Header';


function App() {
  
    return (
      <BrowserRouter>
      <div>
        
      </div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      </BrowserRouter>
  );
  
}

export default App;
