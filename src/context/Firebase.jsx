import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from 'firebase/auth';
import { 
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Create a Firebase context
const FirebaseContext = createContext(null);

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2Dt44Rh2N80WJ7rblYLDlZBJSmNNKaYY",
    authDomain: "bookish-d6642.firebaseapp.com",
    projectId: "bookish-d6642",
    storageBucket: "bookish-d6642.appspot.com",
    messagingSenderId: "415957162780",
    appId: "1:415957162780:web:22da05d05b93087cd0f8d9"
};

// Custom hook to use Firebase context
export const useFirebase = () => useContext(FirebaseContext);

// Initialize Firebase services
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setUser(user ? user : null);
        });
        return () => unsubscribe();
    }, []);

    const signupUserWithEmailAndPassword = (email, password) => 
        createUserWithEmailAndPassword(firebaseAuth, email, password);

    const signinUserWithEmailAndPass = (email, password) =>
        signInWithEmailAndPassword(firebaseAuth, email, password);

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

    const handleCreateNewListing = async (name, isbn, price, cover) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}_${cover.name}`);
        const uploadResult = await uploadBytes(imageRef, cover);
        return await addDoc(collection(firestore, "books"), {
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        });
    };

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{
            signinWithGoogle,
            signupUserWithEmailAndPassword,
            signinUserWithEmailAndPass,
            handleCreateNewListing,
            isLoggedIn,
            user
        }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
