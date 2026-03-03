// // require('dotenv').config();
// // import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
// // import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// // import dotenv from "dotenv"
// // dotenv.config();

// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // console.log(`mera variable`,process.env.API_KEY,`hai`)
// // Your web app's Firebase configuration
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

// // Initialize Firebase

// // const app = initializeApp(firebaseConfig);

// // console.log("InitApp=>",app)

// // const auth = getAuth(app)

// // console.log("auth=>",auth)

// // // const analytics = getAnalytics(app);


// // // SignUp
// // var btn = document.getElementById("signupBtn")
// // btn.addEventListener("click", signup)

// // function signup() {
// //     var uemail = document.getElementById("uemail").value
// //     var upassword = document.getElementById("upassword").value
// //     console.log("usename=>",uemail, "useremail=>",upassword)


// // createUserWithEmailAndPassword(auth, uemail, upassword)
// //     .then((userCredential) => {
// //         const user = userCredential.user;
// //         console.log("user=>", user)
// //     })
// //     .catch((error) => {
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //         console.log("Error=>", errorMessage)
// //         // console.log("Error=>", errorCode)
// //     });
// // }










// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: Process.env.AUTH_DOMAIN,
//     projectId: Process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.ASSIGNING_SENDER_ID,
//     appId: process.env.APP_ID,
//     measurementId: process.env.MEASUREMENT_ID
// };


// const app = initializeApp(firebaseConfig);
// console.log("App Initialized:", app)
// const auth = getAuth(app)
// console.log("App Initialized:", auth)

// // // Signup

// var signupBtn = document.getElementById("signupBtn")
// signupBtn.addEventListener("click", signup)


// var userEmail = document.getElementById("useremail")
// var userPassword = document.getElementById("userpassword")

// var userAcc = document.getElementById("userAcc")

// onAuthStateChanged(Auth, (user) => {
//     if (user) {
//         userAcc.innerText = user.email
//     } else {
//     }
// });



// function signup() {
//     var uemail = userEmail.value
//     var upassword = userPassword.value
//     console.log("uemail", uemail, "upassword", upassword)
// 

//     createUserWithEmailAndPassword(Auth, uemail, upassword)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log("user=>", user)
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log("Error=>", errorMessage)
//             // console.log("Error=>", errorCode)
//         });
// }


// Login

// var loginBtn = document.getElementById("loginBtn")
// loginBtn.addEventListener("click", login)

// var loginAcc = document.getElementById("loginAcc")

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         loginAcc.innerText = user.email
//     }
//     else {
//         loginAcc.innerText = "No user Founded"
//     }

// })


// function login() {
//     var emailField = document.getElementById("lemail").value
//     var passwordField = document.getElementById("lpassword").value
//     // console.log("Email", emailField, "Password", passwordField)

//     console.log("Koshish kar rahe hain:", emailField)

//     // const auth = getAuth();
//     signInWithEmailAndPassword(auth, emailField, passwordField)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log("login Successful:", user)
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;

//             if (error.code === 'auth/invalid-email') {
//                 alert("Email ka format sahi nahi hai.");
//             } else if (error.code === 'auth/user-not-found') {
//                 alert("Is email par koi account nahi mila.");
//             }
//         });
// }


import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged,
    signOut,
    GoogleAuthProvider,     
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: Process.env.AUTH_DOMAIN,
    projectId: Process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.ASSIGNING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

console.log("App initialized=>:", app);

const auth = getAuth(app)

console.log("auth=>", auth)


// ==== SignUp

var signupBtn = document.getElementById("signupBtn")
signupBtn.addEventListener("click", signup)


// ===== login / Signin

var loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click", login)


// signup

function signup() {
    var semail = document.getElementById("semail").value
    var spassword = document.getElementById("spassword").value

    console.log("Email=>", semail)
    console.log("Password=>", spassword)

    createUserWithEmailAndPassword(auth, semail, spassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user=>", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMesaage=>", errorMessage)
            console.log("errorCode=>", errorCode)
        });

}


// login

var output = document.getElementById("output")

function login() {
    var lemail = document.getElementById("lemail").value
    var lpassword = document.getElementById("lpassword").value

    console.log("Email=>", lemail)
    console.log("Password=>", lpassword)

    signInWithEmailAndPassword(auth, lemail, lpassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("user=>", user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("errorMesaage=>", errorMessage)
            console.log("errorCode=>", errorCode)
            output.innerText = "No user Found"
            output.style.color = "red"
        });

}


onAuthStateChanged(auth, (user) => {
    if (user) {
        output.innerText = user.email
        output.style.color = "green"
    } else {
        
    }
});


var logoutBtn = document.getElementById("loginOutBtn")
logoutBtn.addEventListener("click", logout)

function logout() {
    signOut(auth).then(() => {
        output.innerText = "";
    }).catch((error) => {
        console.log("Error during sign out:", error);
    });
}



// LoginWithGoogle
const provider = new GoogleAuthProvider();


var googleLoginBtn = document.getElementById("googleLoginBtn")
googleLoginBtn.addEventListener("click",googleLogin)

function googleLogin() {



signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("Google Login Successful:", user)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

    }













