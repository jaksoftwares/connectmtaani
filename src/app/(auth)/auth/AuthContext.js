// // AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [accountType, setAccountType] = useState(null);

//   const login = (type) => setAccountType(type);
//   const logout = () => setAccountType(null);

//   return (
//     <AuthContext.Provider value={{ accountType, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
