import React, { useContext, useState, useEffect } from "react";
import { auth, database } from "../Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signUp(id, type, email, password) {
    auth.createUserWithEmailAndPassword(email, password);
    database.ref(`${type}/${id}`).set({
      email: email,
      type: type,
      id: id,
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
