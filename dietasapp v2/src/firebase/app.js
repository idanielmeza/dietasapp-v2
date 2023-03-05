import {initializeApp} from 'firebase/app';
import {getAuth,FacebookAuthProvider, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAkuTMa6KT2cJqg9lDi6UZsilmPo2ADryY",
    authDomain: "dietasapp-d4bdb.firebaseapp.com",
    projectId: "dietasapp-d4bdb",
    storageBucket: "dietasapp-d4bdb.appspot.com",
    messagingSenderId: "1011243594638",
    appId: "1:1011243594638:web:77ee5e9c311fe4874feadf",
    measurementId: "G-5E7GSWJL2G"
};


initializeApp(firebaseConfig);


export const loginWithFacebook = () => {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth,provider);
}

export const loginWithGoogle = ()=>{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider);
}

export const logoutFireBase = () => {
    const auth = getAuth();
    return auth.signOut();
}