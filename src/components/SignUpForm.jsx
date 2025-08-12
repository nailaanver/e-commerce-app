import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignUpForm = () => {


  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
 


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', password: '', confirmpassword: '' })
    if (formData.name === '' || formData.email === '' || formData.password === '' || formData.confirmpassword === '') {
      toast.error('please fill all required field')
      return;
    }
    if (formData.password !== formData.confirmpassword) {
      toast.error('Password does not match')
      return;
    }
    console.log('Form submitted:', { formData });
    setIsSignUp(true);
    toast.success('Registration  sucssessfully')
  }



  return (
    <form onSubmit={handleSubmit} onsubmit="return false" className="form">
      <label className="input-hero password-input" htmlFor="text">
        <input type="text" name="name" id="name" required="" value={formData.name} onChange={handleInputChange} />
        <span className="input-name"> Name </span>
      </label>

      <label className="input-hero" htmlFor="email">
        <input type="email" name="email" id="email" required="" value={formData.email} onChange={handleInputChange} />
        <span className="input-name"> Email </span>
      </label>
      <label className="input-hero password-input" htmlFor="password">
        <input type={showPassword ? "text" : "password"}
          name="password" id="password" required="" value={formData.password} onChange={handleInputChange} />
        <span className="input-name"> Password </span>
        <div className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
        </div>
        
      </label>

      <label className="input-hero password-input" htmlFor="confirm password">
        <input type={showPassword ? "text" : "password"} name="confirmpassword" id="confirm password" required="" value={formData.confirmpassword} onChange={handleInputChange} />
        <span className="input-name"> Confirm Password </span>
        <div className="toggle-password-icon" onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash}/>
        </div>



      </label>

      <label htmlFor="remember" className="checkbox-hero">
        <input type="checkbox" name="remember" id="remember" />
        <span className="checkbox-cover" />
        <span className="checkbox-name"> Remember Me </span>
      </label>
      <button type="submit" className="submit-btn btn">
        Continue
      </button>
      <Toaster />
    </form>
  )
}
export default SignUpForm