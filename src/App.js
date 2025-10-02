
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
import AdminLayout from './components/layouts/AdminLayout'
import UserLayout from './components/layouts/UserLayout';
import AdminLogin from './components/AdminLogin';
import  ProductList  from './pages/admin/ProductList';
import AddProducts from './pages/admin/AddProduct'
import  Shipping from './pages/admin/Shipping';
import Payments from './pages/admin/Payments';
import OrderDetails from './pages/admin/OrderDetails';
import OrderList from './pages/admin/OrderList';
import Settings from './pages/admin/Settings';
import Help from './pages/admin/Help';
import Report from './pages/admin/Report';



function App() {

  return (
    <main>
      <BrowserRouter>
      {/* <ProtectRoutes/>         */}
          <AuthProvider>
            {/* <ErrorBoundary> */}
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
                <Route path='/admin-login' element={<AdminLogin/>}/>

                {/* <Route element={<AdminLayout/>}>
                  <Route path='/admin/dashboard' element={<AdminDashboard />} />
                  <Route path='/admin/products' element={<Orders/>}/>
                </Route> */}

                <Route element={<AdminLayout />}>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/products/product-list" element={<ProductList />} />
                  <Route path="/admin/products/add-products" element={<AddProducts />} />
                  <Route path="/admin/orders/order-list" element={<OrderList />} /> 
                  <Route path="/admin/orders/order-details" element={<OrderDetails />} /> 
                  <Route path="/admin/shipping" element={<Shipping />} /> 
                  <Route path="/admin/payments" element={<Payments />} />
                  <Route path="/admin/settings" element={<Settings />} />
                  <Route path="/admin/help" element={<Help />} />
                  <Route path="/admin/report" element={<Report />} />
                  {/* <Route path="/admin/analytics" element={<Report />} /> */}
                </Route>
            
              </Routes>
            {/* </ErrorBoundary> */}

          </AuthProvider>
      </BrowserRouter>
    </main>
  );

}

export default App;
