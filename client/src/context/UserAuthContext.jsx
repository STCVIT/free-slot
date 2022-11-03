import { createContext, useEffect, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "firebase/auth";
import firebase from 'firebase/app'
import { auth } from "../firebase";
import axios from "axios";
import Cookies from 'js-cookie'

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  function logIn(email,password){
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      auth.currentUser.getIdToken().then((token)=>{
        axios.get('http://localhost:4000/user/sessionlogin', {
          headers: {
            'Authorization': `Bearer ${token}`,
            //"CSRF-Token": Cookies.get("XSRF-TOKEN")
          }
        })
      })
      .then((res)=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
    })
    
  }

  const logOut = async ()=>{
    await signOut(auth).then(()=>{
      axios.post('http://localhost:4000/user/sessionlogout')
    })
  }
  const googleSignUp = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuthProvider);
    onAuthStateChanged(auth, (user)=>{
      if(user){
        const name = user.displayName.slice(0, user.displayName.length-10)
        const regno = user.displayName.slice(-9)
        const email = user.email
        return user.getIdToken().then((idToken)=>{
          const csrfToken = Cookies.get("XSRF-TOKEN")
          console.log(csrfToken)
          axios.post('http://localhost:4000/user/create',
          {
            name,
            regno,
            email
          },
          {
            headers: {
            'Authorization': `Bearer ${idToken}`,
            //'CSRF-Token': Cookies.get("_csrf")
          }}
          )
          axios.post('http://localhost:4000/user/sessionlogin',
          {
            headers: {
            'Authorization': `Bearer ${idToken}`,
            //'CSRF-Token': Cookies.get("_csrf")
          }}
          )
        })
      }
    })
  };

  const googleSignIn = async () =>{
    const googleAuthProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuthProvider);
    onAuthStateChanged(auth, (user)=>{
      if(user){
        user.getIdToken().then((token)=>{
          axios.get('http://localhost:4000/user/getuser', {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then((res)=>{
            console.log(res)
          })
        })
      }
    })
  }
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
        console.log(user)
      }
    })
    return ()=>{
      unsubscribe()
    }
  }, [])
  return (
    <userAuthContext.Provider
      value={{ user, logIn, logOut, googleSignUp, googleSignIn, sendTimetable, reset }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export const UserAuth = () => {
  return useContext(userAuthContext);
}