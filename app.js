let sign_in_btn = document.querySelector("#sign-in-btn");
let sign_up_btn = document.querySelector("#sign-up-btn");
let container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDxJZRwn_tME6HW3b_789DkyFowweevnfw",
  authDomain: "assigment-b75c5.firebaseapp.com",
  projectId: "assigment-b75c5",
  storageBucket: "assigment-b75c5.appspot.com",
  messagingSenderId: "51507047263",
  appId: "1:51507047263:web:b7198837a8959b8cabe4ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// make global variables
var userNameEl, emailEl, passwordEl, userPhoneEl, cityEl, usercountryEl;
//create Ready Fuction
function Ready(){
userNameEl = document.getElementById('username').value;
emailEl = document.getElementById('email').value;
passwordEl = document.getElementById('password').value;
userPhoneEl = document.getElementById('phonenum').value;
cityEl = document.getElementById('city').value;
usercountryEl = document.getElementById('country').value;
}
//create insert function
document.getElementById('insert').onclick = function(){
Ready();
firebase.database().ref('users/' + userNameEl).set({
  UserName: userNameEl,
  UserEmail: emailEl,
  UserPassword: passwordEl,
  UserPhone: userPhoneEl,
  UserCity: cityEl,
  UserCountry: usercountryEl
});
}

// Make resturaunt Variables
var res_name, res_contry, res_city, res_email, res_pass;
// Get READY function
function ResReady(){
  res_name = document.getElementById('res-name').value;
  res_contry = document.getElementById('res-country').value;
  res_city = document.getElementById('res-city').value;
  res_email = document.getElementById('res-email').value;
  res_pass = document.getElementById('res-pass').value;
  }
//create insert function
document.getElementById('res-insert').onclick = function(){
  ResReady();
  firebase.database().ref('resturaunt/' + res_name).set({
    Resturaunt_Name: res_name,
    Resturaunt_Email: res_email,
    Resturaunt_Password: res_pass,
    Resturaunt_City: res_city,
    Resturaunt_Country: res_contry
  });
  }
