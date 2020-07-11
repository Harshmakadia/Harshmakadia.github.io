import React, { useContext, createContext, useEffect } from "react";
import { history } from "./router";

/*
  This file (auth.js) is added to your codebase if you chose "None" for your
  auth provider when exporting from Divjoy, but some of you components attempt 
  to import auth.js and use the useAuth() hook. Rather than break your site, 
  we include this file and just just throw errors when auth methods (auth.signup, auth.signin, etc) are used. 
  To entirely remove auth from your codebase search for "auth" and remove all related code.
*/

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const errorMessage = `Authentication is disabled because you chose "None" when picking an authentication option in Divjoy. Please go to the Divjoy homepage and choose an option or choose "Other" if you'd like to integrate a different auth service after code export.`;
const errorFunction = () => Promise.reject(new Error(errorMessage));

function useProvideAuth() {
  return {
    user: false,
    signup: errorFunction,
    signin: errorFunction,
    signinWithProvider: errorFunction,
    signout: errorFunction,
    sendPasswordResetEmail: errorFunction,
    confirmPasswordReset: errorFunction,
    updateEmail: errorFunction,
    updatePassword: errorFunction,
    updateProfile: errorFunction,
  };
}

export const requireAuth = (Component) => {
  return (props) => {
    useEffect(() => {
      history.replace("/auth/signin");
    }, []);
    return null;
  };
};
