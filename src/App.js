import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

// Hypothetical AuthContext
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

function App() {
  const [user, setUser] = useState(null); // Initially, no user is logged in

  const login = async (credentials) => {
    // Here, make your API call to log in
    // If successful, update the user state
    // const loggedInUser = await apiLoginCall(credentials);
    // setUser(loggedInUser);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
          {/* Redirect to login by default */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
