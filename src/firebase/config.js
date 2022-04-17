import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBylo5LUXtJ8sqjEmLniqsrLPt4x7erfFM",
  authDomain: "mymoneyapp-2d553.firebaseapp.com",
  projectId: "mymoneyapp-2d553",
  storageBucket: "mymoneyapp-2d553.appspot.com",
  messagingSenderId: "307898819327",
  appId: "1:307898819327:web:d01e8105e99ce5328062ca",
};

//init firebase
firebase.initializeApp(firebaseConfig);


// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
