import {firebaseConfig } from './api_key.js';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const btnLogin = document.querySelector('.btnLogin');
const btnRegister = document.querySelector('.btnRegister');
const btnGoogle = document.querySelector('.btnGoogle');

btnLogin.addEventListener('click', login);
btnRegister.addEventListener('click', register);
btnGoogle.addEventListener('click', signInWithGoogle);



function login() {
   const email = document.getElementById("inputEmail").value;
   const password = document.getElementById("inputPassword").value;

   auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
         alert('Login successful');
         window.location.href = "main.html";
      })
      .catch(error => {
         alert(error.message);
      });

}

function register(){
   const email = document.getElementById("inputEmail").value;
   const password = document.getElementById("inputPassword").value;

   auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
         alert('Account created successfully');
         window.location.href = "main.html";
      })
      .catch(error => {
         alert(error.message);
      });
}

function signInWithGoogle(){
   const provider = new firebase.auth.GoogleAuthProvider();

   auth.signInWithPopup(provider)
      .then(result => {
         alert('Login successful with Google by' + result.user.email);
         window.location.href = "main.html";
      })
      .catch(error => {
         alert(error.message);
      });
}

