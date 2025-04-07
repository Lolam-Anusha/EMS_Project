import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.css";
import teamTrackLogo from "../../assets/TeamTrack_Logo.png";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    name: "",
    gender: "",
    phoneNumber: "",
    photo: null
  });
  
  // Track registered users
  const [registeredUsers, setRegisteredUsers] = useState([]);
  
  // Load registered users from localStorage on component mount
  useEffect(() => {
    const savedUsers = localStorage.getItem("registeredUsers");
    if (savedUsers) {
      setRegisteredUsers(JSON.parse(savedUsers));
    }
  }, []);

  // switch between login and signup model
  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Clear form when switching modes
    setFormData({
      email: "",
      password: "",
      role: "",
      name: "",
      gender: "",
      phoneNumber: "",
      photo: null
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Convert image file to data URL
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Check if the user exists in our registered users
      const userExists = registeredUsers.find(
        user => user.email === formData.email && user.password === formData.password
      );
      

      if (userExists) {
        // Save current user data for use in dashboard
        localStorage.setItem("currentUser", JSON.stringify({
          name: userExists.name,
          email: userExists.email,
          role: userExists.role,
          gender: userExists.gender,
          phoneNumber: userExists.phoneNumber,
          photoUrl: userExists.photoUrl
        }));
        
        // Navigate to the dashboard based on user role
        navigate(`/dashboard/${userExists.role}`);
      } else {
        alert("Invalid email or password. If you haven't registered yet, please sign up.");
      }
    } else {
      // Check if email already exists
      const emailExists = registeredUsers.some(user => user.email === formData.email);
      
      if (emailExists) {
        alert("This email is already registered. Please use a different email or login.");
        return;
      }
      
      let photoUrl = null;
      
      // Convert the image to base64 if a photo was selected
      if (formData.photo) {
        try {
          photoUrl = await convertToBase64(formData.photo);
        } catch (error) {
          console.error("Error converting image:", error);
        }
      }
      
     
      // Create new user object from form data
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
        gender: formData.gender,
        phoneNumber: formData.phoneNumber,
        photoUrl: photoUrl,
        registeredAt: new Date().toISOString()
      };
      
      // Add to registered users array
      const updatedUsers = [...registeredUsers, newUser];
      setRegisteredUsers(updatedUsers);
      
      // checking 
      //  console.log("Photo URL length:", photoUrl ? photoUrl.length : 0);
      
      // Save updated users to localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      
      alert("Account created successfully! Please login with your credentials.");
      setIsLogin(true);
    }
  };

  const handleGuestLogin = () => {
    // Set guest user data
    localStorage.setItem("currentUser", JSON.stringify({
      name: "Guest User",
      email: "guest@example.com",
      role: "guest",
      gender: "",
      phoneNumber: "",
      photoUrl: null
    }));
    
    // Navigate to general dashboard
    navigate("/dashboard");
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
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required={!isLogin} placeholder="Enter your full name"/>
              </div>
              
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required={!isLogin}>
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required={!isLogin} placeholder="Enter your phone number"/>
              </div>
              
              <div className="form-group">
                <label htmlFor="photo">Profile Photo</label>
                <input type="file" id="photo" name="photo" accept="image/*" onChange={handleChange} required={!isLogin}/>
              </div>
            </>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Enter your password"/>
          </div>
          
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" name="role" value={formData.role} onChange={handleChange}required>
              <option value="">Choose your role</option>
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
}

export default LoginForm