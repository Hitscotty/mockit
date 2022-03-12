import React from "react";

const AuthContext = React.createContext({});
const AuthProvider = (props) => <AuthContext.Provider value={{}} {...props} />;
export default AuthProvider;
