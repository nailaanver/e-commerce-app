    // AuthContext.js
    import React, { createContext, useState, useContext } from 'react';

    const AuthContext = createContext(null);

    export const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null); // Initialize user state

      const login = (userData) => {
        setUser(userData); // Set the user data upon successful login
      };

      const logout = () => {
        setUser(null); // Clear user data on logout
      };

      return (
        <AuthContext.Provider value={{ user, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };

    export const useAuth = () => {
      return useContext(AuthContext);
    };