import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcjdqVp7As57l179jjHS_Jeg40JVUXxLQ",
    authDomain: "ecommerce-c3693.firebaseapp.com",
    projectId: "ecommerce-c3693",
    storageBucket: "ecommerce-c3693.firebasestorage.app",
    messagingSenderId: "964054110394",
    appId: "1:964054110394:web:eddb9f4bbb3599bceb3283",
    measurementId: "G-ZF0Z8YDQX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
console.log(auth)
// const analytics = getAnalytics(app);


// SignUp
var btn = document.getElementById("signupBtn")
btn.addEventListener("click", signup)

function signup() {
    var uemail = document.getElementById("uemail").value
    var upassword = document.getElementById("upassword").value
console.log(uemail,upassword)
}


createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });