import { createContext, useEffect, useContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");
  const signIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response
    //console.log(response.user.accessToken);
  };
  const logOut = async () => {
    await signOut(auth);
  };
  const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuthProvider);
    onAuthStateChanged(auth, (user)=>{
      if(user){
        const name = user.displayName.slice(0, user.displayName.length-10)
        const regno = user.displayName.slice(-9)
        const email = user.email
        console.log(name, regno, email)
        axios.post('http://localhost:4000/user/create', {
          name,
          regno,
          email
        })
      } else {
        console.log("user is signed out")
      }
    })
  };
  const sendTimetable = (file)=>{
    const email = user.email
    axios.post('http://localhost:4000/timetable/string', {
    email,  
    file
    })
    .then((res)=>{
      if(res.status===200){
            console.log(res)
  }})
  }
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
      value={{ user, signIn, logOut, googleSignIn, sendTimetable }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export const UserAuth = () => {
  return useContext(userAuthContext);
}