import { createContext, useContext,useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from 'firebase/auth';


const FirebaseContext=createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyB2Dt44Rh2N80WJ7rblYLDlZBJSmNNKaYY",
    authDomain: "bookish-d6642.firebaseapp.com",
    projectId: "bookish-d6642",
    storageBucket: "bookish-d6642.appspot.com",
    messagingSenderId: "415957162780",
    appId: "1:415957162780:web:22da05d05b93087cd0f8d9"
  };

export  const useFirebase =()=>useContext(FirebaseContext);


const firebaseApp=initializeApp(firebaseConfig);
const firebaseAuth= getAuth(firebaseApp);
const googleProvider= new GoogleAuthProvider();



export const FirebaseProvider = (props) => {
const [user, setUser] = useState(null);

useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
    if (user) setUser(user);
    else setUser(null);
    });
}, []);



    const signupUserWithEmailAndPassword=(email,password)=>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

    const singinUserWithEmailAndPass=(email,password)=>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle=()=> signInWithPopup(firebaseApp,googleProvider);

    const isLogedIn=user?true:false;


    return(
         <FirebaseContext.Provider value={{
            signinWithGoogle,
            signupUserWithEmailAndPassword,
            singinUserWithEmailAndPass,
            isLogedIn,
         }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
};