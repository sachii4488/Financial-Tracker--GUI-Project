var err = document.querySelector(".errmsg");
var userMail = document.querySelector('input[name="userEmail"]');
var userPassWord = document.querySelector('input[name="userPass"]');
var loginForm = document.getElementById("Lin");

const exLogin = {
  userName: "user@ex.com",
  password: "123",
};

window.onload = init();

function init() {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    userLogin();
  });
}

function userLogin() {
  var nameVal = userMail.value,
    passwordVal = userPassWord.value;

  var isLogin = true;

  if (nameVal === exLogin.userName && passwordVal === exLogin.password) {
    loginCheck(isLogin);
  } else {
    loginCheck(!isLogin);
  }
}

function loginCheck(isLogin) {
  if (isLogin) {
    window.location.href = "./dashboard.html";
  } else {
    err.classList.add("err");
  }
}
