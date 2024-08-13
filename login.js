// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
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
  const auth =getAuth(app)
  
  //inputs
  
  const submit = document.getElementById("login-submit");
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
      const user = userCredential.user;
     window.location.href="index.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
  });
  