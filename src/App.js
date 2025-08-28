
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectRoutes from './hooks/ProtectRoutes';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import  Product  from './components/Product';
import ProductDetails from './components/ProductDetails';
import AdminDashboard from './components/AdminDashboard';



function App() {

  return (
    <main>
      <BrowserRouter>
      <ProtectRoutes/>
      
        <Header />
        
          <AuthProvider>
            <ErrorBoundary>
              <Routes>

                <Route path='/' element={<Home />} />
                <Route path='admin' element={<AdminDashboard />} />

                <Route path='/contact' element={<Contact />} />

                <Route path='/services' element={<Services />} />
                {/* <Route path='/blog' element={<Blog />} /> */}
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetails />} />

                {/* <Route path="/product_details" element={<ProductDetails />} /> */}
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
              </Routes>
            </ErrorBoundary>

          </AuthProvider>

        
        <Footer />
      </BrowserRouter>
    </main>
  );

}

export default App;
