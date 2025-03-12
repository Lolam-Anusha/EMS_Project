import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.css";
import teamTrackLogo from "../../assets/TeamTrack_Logo.png"; // Update to use the same logo as dashboard

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "", // Default role
    name: "",
    gender: "male",
    phoneNumber: "",
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would authenticate the user here
    // For demonstration purposes, we'll just navigate based on role
    
    if (isLogin) {
      // When logging in, navigate to the specific dashboard based on role
      navigate(`/dashboard/${formData.role}`);
    } else {
      // When signing up, simulate account creation and return to login
      // In a real app, you would handle the registration process with your backend
      alert("Account created successfully! Please login.");
      setIsLogin(true);
    }
  };

  const handleGuestLogin = () => {
    // Guest users are directed to the general dashboard
    navigate("/dashboard");
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <div className="login-logo-section">
        <img src={teamTrackLogo} alt="TeamTrack Logo" className="login-logo" />
        <h2>TeamTrack</h2>
        <p>Streamline your workforce management</p>
      </div>
      
      <div className="login-form-section">
        <h1>{isLogin ? "Login to TeamTrack" : "Create an Account"}</h1>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required={!isLogin}
                >
                  <option value="Select your gender">Select your gender</option>  
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="photo">Profile Photo</label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            </>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="role">Choose your role</option>
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <button type="submit" className="submit-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        
        {isLogin && (
          <button onClick={handleGuestLogin} className="guest-button">
            Continue as Guest
          </button>
        )}
        
        <p className="toggle-form">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleForm} className="toggle-link">
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm