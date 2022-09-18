import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDaLsj_7p3LukFmWSTxvRsp1WfDaRz4DU0",
  authDomain: "free-slot-d169d.firebaseapp.com",
  projectId: "free-slot-d169d",
  storageBucket: "free-slot-d169d.appspot.com",
  messagingSenderId: "844047811043",
  appId: "1:844047811043:web:418d9885b1d9fc2f8920d6",
  measurementId: "G-P18VWHNCPP"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app;