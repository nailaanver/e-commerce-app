import { useState } from "react"
import MessageIcon from "./icons/MessageIcon";
import PasswordIcon from "./icons/PasswordIcon";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


const LoginForm = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [Loading, setLoading] = useState(false)
  const navigator = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ email: '', password: '' })
    if (formData.email === '' || formData.password === '') {
      toast.error('please fill all required field')
      return;
    }
    
    console.log('Form submitted:', { formData });
    setIsLogedIn(true);
    setLoading(true)
    // toast.success('submitted sucssessfully')
  // }
  // Login function
  await axios.post('https://ecommerce-project-backend-nodejs.onrender.com/api/auth/login', formData,{}).then(res=>{

  // console.log(res.data.data, 'from then')

  window.localStorage.setItem('access_token', res.data.token)
  window.localStorage.setItem('user_data', JSON.stringify(res.data.token))
  navigator('/')

  }).catch(err => {
    toast.error('Login failed! Please try again')
  }).finally(() => {
    setLoading(false)
  })
}; 



  return (

    <form onSubmit={handleSubmit} onsubmit="return false" className="form">
      <label className="input-hero" htmlFor="email">
        <input type="email" name="email" id="email" required="" value={formData.email} onChange={handleInputChange} />
        <span className="input-name"> Email </span>
        {/* <MessageIcon /> */}
      </label>
      <label className="input-hero password-input" htmlFor="password">
        <input type={showPassword ? "text" : "password"} name="password" id="password" required="" value={formData.password} onChange={handleInputChange} />
        <span className="input-name"> Password </span>
        <div className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
        </div>
        {/* <PasswordIcon /> */}
        <a href="#" className="recovery-password">
          {" "}
          Forgot password{" "}
        </a>
      </label>
      <label htmlFor="remember" className="checkbox-hero">
        <input type="checkbox" name="remember" id="remember" />
        <span className="checkbox-cover" />
        <span className="checkbox-name"> Remember Me </span>
      </label>
      <button type="submit" className="submit-btn btn" disabled={Loading}>
        { Loading ? 'Logging in...' : 'Login'}
      </button>

      <div className="form-bottom">
        Don't have account yet?
        <Link to={'/signup'}>
          <span>SignUp</span>
        </Link>
      </div>
      <Toaster />
    </form>


  )
}
export default LoginForm