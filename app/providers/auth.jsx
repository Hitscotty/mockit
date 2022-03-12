import React from "react";
import { useContext } from "react/cjs/react.production.min";

const AuthContext = React.createContext({});
const AuthProvider = (props) => <AuthContext.Provider value={{}} {...props} />;

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
