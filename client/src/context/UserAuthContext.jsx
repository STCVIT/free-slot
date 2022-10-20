import { createContext, useEffect, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  function logIn(email,password){
    return signInWithEmailAndPassword(auth,email,password)
  }

  function logOut(){
    return signOut(auth)
  }
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

  function reset(email){
    return sendPasswordResetEmail(auth,email)
  }

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
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user);
        user.getIdToken().then((token)=>{setToken(token)})
      }
      
      console.log(token)
    })
    return ()=>{
      unsubscribe()
    }
  }, [])
  return (
    <userAuthContext.Provider
      value={{ user, logIn, logOut, googleSignIn, sendTimetable, reset }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export const UserAuth = () => {
  return useContext(userAuthContext);
}