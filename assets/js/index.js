window.addEventListener("load", () => {
  const wrapper = document.querySelectorAll(".wrapper");
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.forEach((item) => {
      if (!item.classList.contains("valid")) {
        checkName(firstName);
        checkName(lastName);
        checkEmail(email);
        checkPassword(password);
      }
    });
  });

  firstName.addEventListener("blur", () => {
    checkName(firstName);
  });
  lastName.addEventListener("blur", () => {
    checkName(lastName);
  });
  email.addEventListener("blur", () => {
    checkEmail(email);
  });
  password.addEventListener("blur", () => {
    checkPassword(password);
  });

  firstName.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      removeBoth(firstName);
    }
  });
  lastName.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      removeBoth(lastName);
    }
  });
  email.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      removeBoth(email);
    }
  });
  password.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      removeBoth(password);
    }
  });
});

function checkName(name) {
  function checkNameInner(e) {
    return /^[A-Za-z]{3,15}$/.test(e.value);
  }
  if (checkNameInner(name)) {
    setSuccessFor(name);
    return true;
  }
  setErrorFor(name);
  return false;
}

function checkEmail(email) {
  function checkEmailInner(e) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      e.value
    );
  }
  if (checkEmailInner(email)) {
    setSuccessFor(email);
    return true;
  }
  setErrorFor(email);
  return false;
}

function checkPassword(password) {
  function checkPasswordInner(e) {
    return /^[A-Za-z0-9]{6,15}$/.test(e.value);
  }
  if (checkPasswordInner(password)) {
    setSuccessFor(password);
    return true;
  }
  setErrorFor(password);
  return false;
}

function setErrorFor(input) {
  const formControl = input.parentNode;
  formControl.classList.remove("valid");
  formControl.classList.add("invalid");
  if (input.id === "email") {
    input.placeholder = "email@example/com";
  } else {
    input.placeholder = "";
  }
}

function setSuccessFor(input) {
  const formControl = input.parentNode;
  formControl.classList.remove("invalid");
  formControl.classList.add("valid");
}

function removeBoth(input) {
  const formControl = input.parentNode;
  formControl.classList.remove("invalid");
  formControl.classList.remove("valid");
}
