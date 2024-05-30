import React, { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AuthContext = createContext();

export const AuthProvider=({ children }) =>{
  const [user, setUser] = useState(localStorage.getItem('user') || {});
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [role, setRole] = useState(localStorage.getItem('role') || '');

  const navigate = useNavigate();

  const loginAction = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        data
      );
      if (response.status === 200) {
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user)); 
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setRole(response.data.role);
        localStorage.setItem('role', JSON.stringify(response.data.role));
        if (response.data.user.role === 'admin') {
          navigate('/');
        }
      }
    } catch (err) {
      console.error(err);
      if (err.response.data && err.response.data.message) {
        console.error(err.response.data.message);
      } else {
        console.error('An error occurred during login.');
      }
    }
  };

  const logOut = () => {
    setUser({});
    setToken('');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
