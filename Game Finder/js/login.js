// HTML References
let mailErrorMessage = document.querySelector(".error-message-mail");
let passwordMessage = document.querySelector(".error-message-password");
let emailInput = document.querySelector(".input__email-input");
let passwordInput = document.querySelector(".input__password-input");

// Hide/show password on click
const showPassword = function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    document.querySelector(
      ".input__showpassword-button"
    ).style.backgroundImage = "url(img/hidepassword.svg)";
  } else {
    passwordInput.type = "password";
    document.querySelector(
      ".input__showpassword-button"
    ).style.backgroundImage = "url(img/showpassword.svg)";
  }
};

// //Email input active state handling
emailInput.addEventListener("input", function () {
  document
    .querySelectorAll(".icon-box__variable-fill-user")
    .forEach((element) => element.classList.add("focused"));
});
emailInput.addEventListener("click", function () {
  document
    .querySelectorAll(".icon-box__variable-fill-user")
    .forEach((element) => element.classList.add("focused"));
});
emailInput.addEventListener("blur", function () {
  document
    .querySelectorAll(".icon-box__variable-fill-user")
    .forEach((element) => element.classList.remove("focused"));
});

//Password input active state handling
passwordInput.addEventListener("input", function () {
  document
    .querySelectorAll(".icon-box__variable-fill-password")
    .forEach((element) => element.classList.add("focused"));
});
passwordInput.addEventListener("click", function () {
  document
    .querySelectorAll(".icon-box__variable-fill-password")
    .forEach((element) => element.classList.add("focused"));
});
passwordInput.addEventListener("blur", function () {
  document
    .querySelectorAll(".icon-box__variable-fill-password")
    .forEach((element) => element.classList.remove("focused"));
});

// Email validation with regular expression
const isValidEmail = function (email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// Input color modifier for errors
const setError = function () {
  document.querySelector(".login__separator").classList.add("margin-modifier");
  document
    .querySelectorAll(
      ".input__email-input, .input__password-input, .input__container, .input__icon-box, .icon-box__variable-fill-user, .icon-box__variable-fill-password"
    )
    .forEach((element) => element.classList.add("error"));
};

// Removes error classes
const resetErrors = function () {
  document
    .querySelector(".login__separator")
    .classList.remove("margin-modifier");
  document
    .querySelectorAll(
      ".input__email-input, .input__password-input, .input__container, .input__icon-box, .icon-box__variable-fill-user, .icon-box__variable-fill-password"
    )
    .forEach((element) => element.classList.remove("error"));
};

// Snackbar close
const closeSnackbar = function () {
  document.querySelector(".snackbar").classList.remove("--show--error");
};

// Login validation function pre-request
const loginValidation = function () {
  let emailInputLength = document.querySelector(".input__email-input").value
    .length;
  let passwordInputLength = document.querySelector(".input__password-input")
    .value.length;

  resetErrors();
  mailErrorMessage.classList.remove("show");
  passwordMessage.classList.remove("show");

  if (emailInputLength === 0) {
    setError();
    mailErrorMessage.classList.add("show");
    mailErrorMessage.innerHTML = "Email is required";
  }

  if (passwordInputLength === 0) {
    setError();
    passwordMessage.classList.add("show");
    passwordMessage.innerHTML = "Password is required";
  }

  if (isValidEmail(emailInput.value) === false && emailInputLength > 0) {
    setError();
    mailErrorMessage.classList.add("show");
    mailErrorMessage.innerHTML = "Email format is invalid";
  }

  if (passwordInputLength < 4 && passwordInputLength > 0) {
    setError();
    passwordMessage.classList.add("show");
    passwordMessage.innerHTML = "Password is too short";
  }
  if (passwordInputLength > 3 && passwordInputLength > 0) {
    passwordMessage.classList.remove("show");
  }
  if (isValidEmail(emailInput.value) === true && passwordInputLength > 3) {
    callLoginRequest();
  }
};

// Login function w/request
const callLoginRequest = async function () {
  try {
    let response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${emailInput.value}`,
        password: `${document.querySelector(".input__password-input").value}`,
      }),
    });
    let responseJson = await response.json();
    if (response.status === 200) {
      document.cookie = "authToken=" + responseJson.accessToken;
      window.location.href = "main-view.html";
    }
    if (response.status === 400) {
      setError();
      mailErrorMessage.classList.remove("show");
      passwordMessage.classList.add("show");
      passwordMessage.innerHTML = "Invalid credentials";
    }
  } catch {
    document.querySelector(".snackbar").classList.add("--show--error");
  }
};
