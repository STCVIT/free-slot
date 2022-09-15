import { createContext, useEffect, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user.accessToken);
  };
  const logOut = async () => {
    await signOut(auth);
  };
  const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuthProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, signIn, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export const UserAuth = () => {
  return useContext(userAuthContext);
}