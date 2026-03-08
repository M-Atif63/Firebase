import {
    initializeApp,
    getAuth,
    createUserWithEmailAndPassword,
    firebaseConfig,
    signInWithEmailAndPassword,
    onAuthStateChanged, 
    signOut
} from "./firebase.js"


const app = initializeApp(firebaseConfig);

console.log("App Initialized:", app)

const auth = getAuth(app)

console.log("auth=>", auth)


var signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup)

var text = document.getElementById("alert")

function signup() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("email=>", email)
    console.log("password=>", password)

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log("user=>",user.email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("eror hai=>")
        });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    text.innerText = user.email    
  } else {
    text.innerText = ""
  }
});


















var signinBtn = document.getElementById("loginBtn");
signinBtn.addEventListener("click", login)

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log("email=>", email)
    console.log("password=>", password)


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("login ho gaya")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("eror hai=>")
        });

}



























var signOutBtn = document.getElementById("loginOutBtn");

signOutBtn.addEventListener("click", signout)

function signout() {
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
        console.log("Signout nahi hua")
    });
}


