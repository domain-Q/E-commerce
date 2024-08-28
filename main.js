// import './style.css'
import {product} from "./api/product.js"
import { showProductContainer } from './homeProductCards.js';
import {
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
    signOut,
    createUserWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDTajvq6zqNWhluM-Wa0ikeXw2qGAdbB2U",
    authDomain: "login-page-82716.firebaseapp.com",
    projectId: "login-page-82716",
    storageBucket: "login-page-82716.appspot.com",
    messagingSenderId: "333889969216",
    appId: "1:333889969216:web:2902df3d0e859c362d93a5",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);


showProductContainer(product);


// user behaviour as per login or register
if(localStorage.getItem('user')) {
    let userName = JSON.parse(localStorage.getItem('user')).displayName
    document.querySelector('.sing_in_up').innerHTML = `<a href="javascript:void(0)">Hello ${userName}</a> <a href="javascript:void(0)" id="logout">Logout</a>`
}
//inputs
if(document.getElementById("logout")) {
    document.getElementById("logout").addEventListener('click', () => {
    // Sign out the user
    console.log("hello");
    
    signOut(auth).then(() => {
        console.log('User signed out.');
        localStorage.clear()
        window.location.reload();

      }).catch((error) => {
        console.error('Error signing out:', error);
      });
    })
  
  }


