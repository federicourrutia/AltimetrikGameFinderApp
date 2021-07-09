const showPassword = function () {
  let passwordinput = document.querySelector(".input__password-input");
  if (passwordinput.type === "password") {
    passwordinput.type = "text";
    document.querySelector(".input__password-icon").src =
      "img/hidepassword.svg";
  } else {
    passwordinput.type = "password";
    document.querySelector(".input__password-icon").src =
      "img/showpassword.svg";
  }
};

const loginButton = function () {
  const showError = function () {
    document
      .querySelectorAll(".error-message")
      .forEach((element) => element.classList.add("show"));
    document
      .querySelectorAll(
        ".input__username-input, .input__password-input, .input__container, .input__icon-box, .icon-box__variable-fill"
      )
      .forEach((element) => element.classList.add("error"));
  };

  if (
    document.querySelector(".input__username-input").value === "test" &&
    document.querySelector(".input__password-input").value === "test"
  ) {
    alert("To be continued");
  } else {
    showError();
  }
};
