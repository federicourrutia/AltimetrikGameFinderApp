const showPassword = function () {
  let passwordinput = document.querySelector(".input__password-input");
  if (passwordinput.type === "password") {
    passwordinput.type = "text";
    document.querySelector(
      ".input__showpassword-button"
    ).style.backgroundImage = "url(img/hidepassword.svg)";
  } else {
    passwordinput.type = "password";
    document.querySelector(
      ".input__showpassword-button"
    ).style.backgroundImage = "url(img/showpassword.svg)";
  }
};

const loginButton = function () {
  const showError = function (responseText) {
    let mailMessage = document.querySelector(".error-message-mail");
    let passwordMessage = document.querySelector(".error-message-password");
    let passwordInputLength = document.querySelector(".input__password-input")
      .value.length;
    document
      .querySelector(".login__separator")
      .classList.add("margin-modifier");

    if (
      responseText === "Email and password are required" ||
      responseText === "Email format is invalid"
    ) {
      mailMessage.classList.add("show");
      passwordMessage.classList.remove("show");
      mailMessage.innerHTML = `${responseText}`;
    }
    if (
      responseText === "Cannot find user" ||
      responseText === "Incorrect password"
    ) {
      mailMessage.classList.remove("show");
      passwordMessage.classList.add("show");
      passwordMessage.innerHTML = "Invalid credentials";
    }
    if (passwordInputLength < 4 && passwordInputLength > 0) {
      passwordMessage.classList.add("show");
      passwordMessage.innerHTML = "Password is too short";
    }

    document
      .querySelectorAll(
        ".input__username-input, .input__password-input, .input__container, .input__icon-box, .icon-box__variable-fill"
      )
      .forEach((element) => element.classList.add("error"));
  };

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: `${document.querySelector(".input__username-input").value}`,
      password: `${document.querySelector(".input__password-input").value}`,
    }),
  }).then(async (response) => {
    let responseText = await response.json();
    if (response.status === 200) {
      document.cookie = "authToken=" + responseText.accessToken;
      alert("Login!");
    }
    if (response.status === 400) {
      showError(responseText);
    }
  });
};
