// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,FacebookAuthProvider,GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1GGwI-iCrozR1K8wqWYSd0dkZypyT7B4",
  authDomain: "blog-app-1150c.firebaseapp.com",
  projectId: "blog-app-1150c",
  storageBucket: "blog-app-1150c.appspot.com",
  messagingSenderId: "934417568431",
  appId: "1:934417568431:web:f5512fed43868d07a6fa5a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const google_provider = new GoogleAuthProvider();
const facebook_provider = new FacebookAuthProvider()
const github_provider = new GithubAuthProvider()

export { auth, google_provider, facebook_provider,github_provider };
