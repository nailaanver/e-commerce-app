
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
import Orders from './pages/admin/Orders';
import AdminLayout from './components/layouts/AdminLayout'
import UserLayout from './components/layouts/UserLayout';



function App() {

  return (
    <main>
      <BrowserRouter>
      <ProtectRoutes/>        
          <AuthProvider>
            <ErrorBoundary>
              <Routes>
                <Route element={<UserLayout/>}>
                 <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/services' element={<Services />} />
                {/* <Route path='/blog' element={<Blog />} /> */}
                <Route path="/product" element={<Product />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                </Route>
                
                {/* <Route path="/product_details" element={<ProductDetails />} /> */}
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>

                <Route element={<AdminLayout/>}>
                  <Route path='/admin/dashboard' element={<AdminDashboard />} />
                  <Route path='/admin/products' element={<Orders/>}/>
                </Route>
              </Routes>
            </ErrorBoundary>

          </AuthProvider>
      </BrowserRouter>
    </main>
  );

}

export default App;
