import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectRoutes from './hooks/ProtectRoutes';
import Footer from './components/Footer';


function App() {
  
    return (
      <main>
        <BrowserRouter>
        <ProtectRoutes/>
        <Header/>
      <main>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/shop' element={<Blog/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      </main>
      <Footer/>
      </BrowserRouter>
      </main>
  );
  
}

export default App;
