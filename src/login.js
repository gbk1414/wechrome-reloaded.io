const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  event.preventDefault();
}

function Timecheck(nHour) {
  let greet = "Hello,";
  if (nHour < 5 || nHour >= 21) {
    greet = "Good Night,";
  } else if (nHour >= 17 && nHour < 21) {
    greet = "Good Evening,";
  } else if (nHour >= 12 || nHour < 17) {
    greet = "Good AfterNoon,";
  } else if (nHour >= 5 || nHour < 12) {
    greet = "Good Morning,";
  }
  return greet;
}

function paintGreetings(username) {
  const date = new Date();
  const nHour = date.getHours();
  const greet = Timecheck(nHour);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `${greet} ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);
