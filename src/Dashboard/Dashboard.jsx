import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserCircle, Home, Users, ClipboardList, Settings, LogOut, ChevronDown, Menu } from "lucide-react";
import logo from "../assets/TeamTrack_Logo.png";
import "./dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState({
        name: "User",
        photoUrl: null,
        role: "admin"
    });

    // Extract the current view from the URL path
    const getViewFromPath = () => {
        const path = location.pathname.split('/');
        
        if (path.length > 2) {
            return path[2];
        }
        return "admin";
    };

    const [activeTab, setActiveTab] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const [currentView, setCurrentView] = useState(getViewFromPath());

    // Load user data from localStorage on component mount
    useEffect(() => {
        const currentUser = localStorage.getItem("currentUser");
        // console.log("Raw currentUser from localStorage:", currentUser);
        if (currentUser) {
            const parsedUser = JSON.parse(currentUser);
            setUserData({
                name: parsedUser.name || "User",
                photoUrl: parsedUser.photoUrl || null,
                role: parsedUser.role || "admin"
            });
            
            // If role exists in user data and not in URL, update the view
            if (parsedUser.role && !location.pathname.includes(parsedUser.role)) {
                setCurrentView(parsedUser.role);
            }
        }
    }, [location.pathname]);

    // Update the current view when URL changes
    useEffect(() => {
        setCurrentView(getViewFromPath());
    }, [location.pathname]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleProfileDropdown = () => {
        setProfileDropdownOpen(!profileDropdownOpen);
    };

    const handleNavItemClick = (tab) => {
        setActiveTab(tab);
    };

    const handleRoleChange = (role) => {
        setCurrentView(role);
        navigate(`/dashboard/${role}`);
    };

    const handleLogout = () => {
        // Clear user session data
        localStorage.removeItem("currentUser");
        navigate("/");
    };

    return (
        <div className="dashboard-container">
            {/* Top Bar */}
            <div className="topbar">
                <div className="topbar-left">
                    <button className="menu-toggle" onClick={toggleSidebar}>
                        <Menu size={24} />
                    </button>
                    <div className="logo-container" onClick={() => navigate("/")}>
                        <img src={logo} alt="TeamTrack Logo" className="logo" />
                        <h2>TeamTrack</h2>
                    </div>
                </div>
                <div className="topbar-right">
                    <div className="profile-section">
                        <div className="profile-dropdown" onClick={toggleProfileDropdown}>
                            {userData.photoUrl ? (
                                <img 
                                src={userData.photoUrl} 
                                alt="Profile" 
                                className="profile-photo"
                                onError={(e) => {
                                    console.error("Error loading image:", e);
                                    e.target.onerror = null;
                                    e.target.src = "";
                                }}
                            />
                            ) : (
                                <UserCircle size={32} />
                            )}
                            <span className="profile-name">{userData.name}</span>
                            <ChevronDown size={16} />

                            {profileDropdownOpen && (
                                <div className="profile-dropdown-menu">
                                    <ul>
                                        <li>
                                            <UserCircle size={16} />
                                            <span>My Profile</span>
                                        </li>
                                        <li>
                                            <Settings size={16} />
                                            <span>Settings</span>
                                        </li>
                                        <li className="dropdown-divider"></li>
                                        <li onClick={handleLogout}>
                                            <LogOut size={16} />
                                            <span>Logout</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-content">
                {/* Side Navbar */}
                <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                    <nav className="nav-menu">
                        <ul>
                            <li
                                className={activeTab === "dashboard" ? "active" : ""}
                                onClick={() => handleNavItemClick("dashboard")}
                            >
                                <Home size={20} />
                                <span>Dashboard</span>
                            </li>

                            <li className="nav-section-title">ROLES</li>

                            <li
                                className={currentView === "admin" ? "active" : ""}
                                onClick={() => handleRoleChange("admin")}
                            >
                                <Users size={20} />
                                <span>Admin</span>
                            </li>

                            <li
                                className={currentView === "manager" ? "active" : ""}
                                onClick={() => handleRoleChange("manager")}
                            >
                                <ClipboardList size={20} />
                                <span>Manager</span>
                            </li>

                            <li
                                className={currentView === "employee" ? "active" : ""}
                                onClick={() => handleRoleChange("employee")}
                            >
                                <UserCircle size={20} />
                                <span>Employee</span>
                            </li>

                            <li className="nav-section-title">SETTINGS</li>

                            <li
                                className={activeTab === "settings" ? "active" : ""}
                                onClick={() => handleNavItemClick("settings")}
                            >
                                <Settings size={20} />
                                <span>Settings</span>
                            </li>

                            <li className="logout-item" onClick={handleLogout}>
                                <LogOut size={20} />
                                <span>My profile</span>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="main-content">
                    <div className="content-header">
                        <h2>{currentView.charAt(0).toUpperCase() + currentView.slice(1)} Dashboard</h2>
                        <div className="user-welcome">Welcome, {userData.name}!</div>
                    </div>

                    <div className="content-body">
                        {currentView === "admin" && (
                            <div className="admin-view">
                                <div className="dashboard-card">
                                    <h3>Employee Overview</h3>
                                    <div className="stats-container">
                                        <div className="stat-item">
                                            <h4>Total Employees</h4>
                                            <p className="stat-value">124</p>
                                        </div>
                                        <div className="stat-item">
                                            <h4>Departments</h4>
                                            <p className="stat-value">8</p>
                                        </div>
                                        <div className="stat-item">
                                            <h4>New Hires</h4>
                                            <p className="stat-value">12</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="dashboard-card">
                                    <h3>Recent Activities</h3>
                                    <ul className="activity-list">
                                        <li>
                                            <span className="activity-time">9:45 AM</span>
                                            <span className="activity-text">New employee Sarah Johnson added</span>
                                        </li>
                                        <li>
                                            <span className="activity-time">Yesterday</span>
                                            <span className="activity-text">Department restructuring completed</span>
                                        </li>
                                        <li>
                                            <span className="activity-time">2 days ago</span>
                                            <span className="activity-text">Performance reviews scheduled</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {currentView === "manager" && (
                            <div className="manager-view">
                                <div className="dashboard-card">
                                    <h3>Team Performance</h3>
                                    <div className="stats-container">
                                        <div className="stat-item">
                                            <h4>Team Members</h4>
                                            <p className="stat-value">18</p>
                                        </div>
                                        <div className="stat-item">
                                            <h4>Projects</h4>
                                            <p className="stat-value">5</p>
                                        </div>
                                        <div className="stat-item">
                                            <h4>On Schedule</h4>
                                            <p className="stat-value">92%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="dashboard-card">
                                    <h3>Team Members</h3>
                                    <ul className="team-list">
                                        <li>
                                            <div className="team-member-info">
                                                <span className="team-member-name">Alex Johnson</span>
                                                <span className="team-member-role">Senior Developer</span>
                                            </div>
                                            <span className="team-member-status online">Online</span>
                                        </li>
                                        <li>
                                            <div className="team-member-info">
                                                <span className="team-member-name">Maria Garcia</span>
                                                <span className="team-member-role">UI/UX Designer</span>
                                            </div>
                                            <span className="team-member-status away">Away</span>
                                        </li>
                                        <li>
                                            <div className="team-member-info">
                                                <span className="team-member-name">Sam Wilson</span>
                                                <span className="team-member-role">QA Engineer</span>
                                            </div>
                                            <span className="team-member-status offline">Offline</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {currentView === "employee" && (
                            <div className="employee-view">
                                <div className="dashboard-card">
                                    <h3>My Tasks</h3>
                                    <ul className="task-list">
                                        <li>
                                            <input type="checkbox" id="task1" />
                                            <label htmlFor="task1">Complete Q1 performance review</label>
                                            <span className="task-due">Due today</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="task2" />
                                            <label htmlFor="task2">Submit expense reports</label>
                                            <span className="task-due">Due in 2 days</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="task3" />
                                            <label htmlFor="task3">Team building activity preparation</label>
                                            <span className="task-due">Due next week</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="dashboard-card">
                                    <h3>My Information</h3>
                                    <div className="employee-info">
                                        <div className="info-item">
                                            <span className="info-label">Name:</span>
                                            <span className="info-value">{userData.name}</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">Department:</span>
                                            <span className="info-value">Engineering</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">Manager:</span>
                                            <span className="info-value">Jane Smith</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">Work Anniversary:</span>
                                            <span className="info-value">June 15, 2022</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">Available PTO:</span>
                                            <span className="info-value">14 days</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentView === "guest" && (
                            <div className="guest-view">
                                <div className="dashboard-card">
                                    <h3>Welcome to TeamTrack</h3>
                                    <p className="guest-message">
                                        You are currently browsing as a guest user. Some features may be limited.
                                        To access all features, please <span className="highlight-text" onClick={() => navigate("/")}>login or create an account</span>.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard