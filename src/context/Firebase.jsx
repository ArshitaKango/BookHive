import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext=createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyB2Dt44Rh2N80WJ7rblYLDlZBJSmNNKaYY",
    authDomain: "bookish-d6642.firebaseapp.com",
    projectId: "bookish-d6642",
    storageBucket: "bookish-d6642.appspot.com",
    messagingSenderId: "415957162780",
    appId: "1:415957162780:web:22da05d05b93087cd0f8d9"
  };

export  const useFirebase=()=>useContext(FirebaseContext);


const firebaseApp=initializeApp(firebaseConfig);

export const FirebaseProvider=(props)=>{

    return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>

};