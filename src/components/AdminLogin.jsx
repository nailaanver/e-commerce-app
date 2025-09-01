// import React from 'react'
// import { useState } from "react"
// import MessageIcon from "./icons/MessageIcon";
// import PasswordIcon from "./icons/PasswordIcon";
// import toast, { Toaster } from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const AdminLogin = () => {

//   const [isLogedIn, setIsLogedIn] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [Loading, setLoading] = useState(false)
//   const navigator = useNavigate()


//       const [username, setUsername] = useState('');
//       const [password, setPassword] = useState('');
//       const { login } = useAuth();

      
       
      

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   })
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//      // Simulate API call
//         try {
//           // const response = await api.post('/api/login', { username, password });
//           const userData = { name: username, id: '123' }; // Replace with actual user data from API
//           login(userData); // Call login from context to update user state
//         } catch (error) {
//           console.error('Login failed:', error);
//         }


//     setFormData({ email: '', password: '' })
//     if (formData.email === '' || formData.password === '') {
//       toast.error('please fill all required field')
//       return;
//     }
    
//     console.log('Form submitted:', { formData });
//     setIsLogedIn(true);
//     setLoading(true)
//     // toast.success('submitted sucssessfully')
//   // }
//   // Login function
//   await axios.post('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/login', formData,{}).then(res=>{

//   // console.log(res.data.data, 'from then')

//   window.localStorage.setItem('access_token', res.data.token)
//   window.localStorage.setItem('user_data', JSON.stringify(res.data.data))
//   navigator('/')

//   }).catch(err => {
//     toast.error('Login failed! Please try again')
//   }).finally(() => {
//     setLoading(false)
//   })
// }; 

//   return (
//             <>
//   {/* <div className="prewiev-hero">
//     <img src="https://turkce-sozluk.com/api/src/Prewiev.png" alt="Prewiev" />
//   </div> */}
//   <div className="login-form form-hero">
//     <div className="form-head">
//       <span className="logo">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={100}
//           height={100}
//           viewBox="0 0 100 100"
//           fill="none"
//         >
//           <path
//             d="M62.6963 71.5477H68.988C81.5714 71.5477 91.9046 61.256 91.9046 48.6309C91.9046 36.0477 81.6131 25.7143 68.988 25.7143H62.6963"
//             stroke="#F5F5F5"
//             strokeWidth={6}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M37.738 25.7143H31.488C18.8631 25.7143 8.57143 36.006 8.57143 48.6309C8.57143 61.2143 18.8631 71.5477 31.488 71.5477H37.738"
//             stroke="#F5F5F5"
//             strokeWidth={6}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//           <path
//             d="M33.5714 48.6309H66.9049"
//             stroke="#F5F5F5"
//             strokeWidth={6}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       </span>
//       <h1 className="login-title">Hello Again!</h1>
//     </div>
    
//     {/* admin login form */}

//         <form onSubmit={handleSubmit} onsubmit="return false" className="form">
//       <label className="input-hero" htmlFor="email">
//         <input type="email" name="email" id="email" required="" value={formData.email} onChange={handleInputChange} />
//         <span className="input-name"> Email </span>
//         {/* <MessageIcon /> */}
//       </label>
//       <label className="input-hero password-input" htmlFor="password">
//         <input type={showPassword ? "text" : "password"} name="password" id="password" required="" value={formData.password} onChange={handleInputChange} />
//         <span className="input-name"> Password </span>
//         <div className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
//           <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
//         </div>
//         {/* <PasswordIcon /> */}
//         <a href="#" className="recovery-password">
//           {" "}
//           Forgot password{" "}
//         </a>
//       </label>
//       <label htmlFor="remember" className="checkbox-hero">
//         <input type="checkbox" name="remember" id="remember" />
//         <span className="checkbox-cover" />
//         <span className="checkbox-name"> Remember Me </span>
//       </label>
//       <button type="submit" className="submit-btn btn" disabled={Loading}>
//         { Loading ? 'Logging in...' : 'Login'}
//       </button>

//       <div className="form-bottom">
//         Don't have account yet?
//         <Link to={'/signup'}>
//           <span>SignUp</span>
//         </Link>
//       </div>
//       <Toaster />
//     </form>

//   </div>
//   {/* Buy me a coffe script */}
// </>
//   )
// }

// export default AdminLogin