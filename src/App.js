import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Header from './components/Header';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectRoutes from './hooks/ProtectRoutes';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import { AuthProvider } from './context/AuthContext';
import { Suspense } from 'react';
import ServicesBanner from './components/ServicesBanner';
import HomeBanner from './components/HomeBanner';
import { Product } from './components/Product';
import ProductDetails from './components/ProductDetails';



function App() {

  return (
    <main>
      <BrowserRouter>
        <ProtectRoutes />
        <Header />
        <main>
          <AuthProvider>
            <ErrorBoundary>
              <Routes>

                <Route path='/' element={<Home />} />

                <Route path='/contact' element={<Contact />} />

                <Route path='/services' element={<Services />} />
                {/* <Route path='/blog' element={<Blog />} /> */}
                <Route path="/product" element={<Product />} />
                <Route path="/product_details" element={<ProductDetails />} />
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
              </Routes>
            </ErrorBoundary>

          </AuthProvider>

        </main>
        <Footer />
      </BrowserRouter>
    </main>
  );

}

export default App;
