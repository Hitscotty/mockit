import React from "react";
import { useMatch } from "react-router";
import { useContext } from "react/cjs/react.production.min";

const AuthContext = React.createContext({});
const AuthProvider = (props) => <AuthContext.Provider value={{}} {...props} />;

export const useAuthContext = () => useContext(AuthContext);
export const useIsLoggedIn = () => !useMatch("/");

export default AuthProvider;
