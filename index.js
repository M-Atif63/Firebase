// require('dotenv').config();
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// import dotenv from "dotenv"
// dotenv.config();

// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(`mera variable`,process.env.API_KEY,`hai`)
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: Process.env.AUTH_DOMAIN,
//     projectId: Process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.ASSIGNING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };

// Initialize Firebase

// const app = initializeApp(firebaseConfig);

// console.log("InitApp=>",app)

// const auth = getAuth(app)

// console.log("auth=>",auth)

// // const analytics = getAnalytics(app);


// // SignUp
// var btn = document.getElementById("signupBtn")
// btn.addEventListener("click", signup)

// function signup() {
//     var uemail = document.getElementById("uemail").value
//     var upassword = document.getElementById("upassword").value
//     console.log("usename=>",uemail, "useremail=>",upassword)


// createUserWithEmailAndPassword(auth, uemail, upassword)
//     .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("user=>", user)
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log("Error=>", errorMessage)
//         // console.log("Error=>", errorCode)
//     });
// }










import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// // const firebaseConfig = {
// //     apiKey: process.env.API_KEY,
// //     authDomain: Process.env.AUTH_DOMAIN,
// //     projectId: Process.env.PROJECT_ID,
// //     storageBucket: process.env.STORAGE_BUCKET,
// //     messagingSenderId: process.env.ASSIGNING_SENDER_ID,
// //     appId: process.env.APP_ID,
// //     measurementId: process.env.MEASUREMENT_ID
// // };




// const firebaseConfig = {
//     apiKey: "AIzaSyCcjdqVp7As57l179jjHS_Jeg40JVUXxLQ",
//     authDomain: "ecommerce-c3693.firebaseapp.com",
//     projectId: "ecommerce-c3693",
//     storageBucket: "ecommerce-c3693.firebasestorage.app",
//     messagingSenderId: "964054110394",
//     appId: "964054110394:web:eddb9f4bbb3599bceb3283",
//     measurementId: "G-ZF0Z8YDQX5"
// };

// const app = initializeApp(firebaseConfig);
// const Auth = getAuth(app)

// // Signup

// // var signupBtn = document.getElementById("signupBtn")
// // signupBtn.addEventListener("click", signup)

// // Login

var loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click",login)



// var userEmail = document.getElementById("useremail")
// var userPassword = document.getElementById("userpassword")

// var userAcc = document.getElementById("userAcc")

// onAuthStateChanged(Auth, (user) => {
//     if (user) {
//         userAcc.innerText = user.email
//     } else {
//     }
// });



function signup() {
    var uemail = userEmail.value
    var upassword = userPassword.value
    console.log("uemail", uemail, "upassword", upassword)


    createUserWithEmailAndPassword(Auth, uemail, upassword)
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



onAuthStateChanged(Auth, (user) => {
    if (user) {
        loginAcc.innerText = user.email
    } else {
    }
});


onAuthStateChanged(Auth, (user) => {
    if (user) {
        // loginAcc.innerText = user.email

    } else {
    }
});


function login() {
    var lemail = document.getElementById("lemail").value
    var lpassword = document.getElementById("lpassword").value
    console.log("uemail", lemail, "upassword", lpassword)


    signInWithEmailAndPassword (Auth, lemail, lpassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user=>", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error=>", errorMessage)
            console.log("Error=>", errorCode)
        });
}











