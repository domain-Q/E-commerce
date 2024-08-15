import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
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

//inputs

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
console.log('data',email , password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("signup-form").style.display = "none";
      document.querySelector(".form-box").style.display = "block";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href="/index.html"
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
   
    });
});

// function updateProfile(user){
//     const username = user.displayName;
//     const userEmail = user.email;
//     const userProfilePicture = user.photoURL;

//     document.getElementById("userName").textContent = username;
//     document.getElementById("userEmail").textContent = userEmail;
//     document.getElementById("userProfilePicture").textContent = userProfilePicture;
// }
// updateProfile();

