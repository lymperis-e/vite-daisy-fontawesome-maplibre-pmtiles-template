import { createContext, useState, useEffect } from "react";

// Create a context to share data globally
const AuthContext = createContext(null);
const AuthProvider = (props) => {



  // Create the context value object
  const contextValue = {
    }

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthProvider;
export { AuthContext, AuthProvider };
