import { React, createContext, useEffect, useContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import firebase from "firebase/app";
import { auth } from "../firebase";
import axios from "../axios/index";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState("");

  const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
    // .then((user) => {
    //   user.user.getIdToken().then((token) => {
    //     setToken(token);
    //     axios.post(
    //       "user/sessionlogin",
    //       {},
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //   });
    // });
  };
  const logIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
  };

  const logOut = async () => {
    return await signOut(auth).then(() => {
      localStorage.clear("user");
    });
  };
  const googleSignUp = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleAuthProvider);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const name = user.displayName.slice(0, user.displayName.length - 10);
        const regno = user.displayName.slice(-9);
        const email = user.email;
        return user.getIdToken().then((token) => {
          setToken(token);
          axios.post(
            "user/create",
            {
              name,
              regno,
              email,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        });
      }
    });
  };

  const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return await signInWithPopup(auth, googleAuthProvider);
   };
  function reset(email) {
    return sendPasswordResetEmail(auth, email);
  }

  const sendTimetable = async(file) => {
    const email = user.email;
    return await axios.post("timetable/string", {
        email,
        file,
      })
      // .then((res) => {
      //   if (res.status === 200) {
      //     console.log(res);
      //   }
      // });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        //console.log(localStorage.getItem("user"));
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <userAuthContext.Provider
      value={{
        user,
        token,
        setToken,
        signUp,
        logIn,
        logOut,
        googleSignUp,
        googleSignIn,
        sendTimetable,
        reset,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}
export const UserAuth = () => {
  return useContext(userAuthContext);
};
