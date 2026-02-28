import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: prcess.env.API_KEY,
    authDomain: Process.env.AUTH_DOMAIN,
    projectId: Process.env.PROJECT_ID,
    storageBucket: "ecommerce-c3693.firebasestorage.app",
    messagingSenderId: "964054110394",
    appId: "1:964054110394:web:eddb9f4bbb3599bceb3283",
    measurementId: "G-ZF0Z8YDQX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("InitApp=>",app)
const auth = getAuth(app)
console.log("auth=>",auth)
// const analytics = getAnalytics(app);


// SignUp
var btn = document.getElementById("signupBtn")
btn.addEventListener("click", signup)

function signup() {
    var uemail = document.getElementById("uemail").value
    var upassword = document.getElementById("upassword").value
    console.log("usename=>",uemail, "useremail=>",upassword)
    
    
createUserWithEmailAndPassword(auth, uemail, upassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("user=>", user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error=>", errorMessage)
        // console.log("Error=>", errorCode)
    });
}