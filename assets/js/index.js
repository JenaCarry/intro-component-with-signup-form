window.addEventListener("load", () => {
  const inputs = document.querySelectorAll("input");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
      if (input.value === "") {
        input.parentNode.classList.remove("valid");
        input.parentNode.classList.add("invalid");
        input.placeholder = "";
      } else {
        input.parentNode.classList.remove("invalid");
        input.parentNode.classList.add("valid");
      }

      if (input.id === "email") {
        if (!checkEmail(input.value) || input.value === "") {
          input.parentNode.classList.remove("valid");
          input.parentNode.classList.add("invalid");
          input.placeholder = "email@example/com";
        } else {
          input.parentNode.classList.remove("invalid");
          input.parentNode.classList.add("valid");
        }
      }

      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          btn.click();
        } else if (e.key !== "Tab") {
          input.parentNode.classList.remove("invalid");
          input.parentNode.classList.remove("valid");
        }
      });
    });
  });

  inputs.forEach((input) => {
    input.addEventListener("blur", (e) => {
      const currentInput = e.target;
      if (currentInput.id === "firstName") {
        if (currentInput.value.length >= 3) {
          input.parentNode.classList.remove("invalid");
          input.parentNode.classList.add("valid");
        } else {
          input.parentNode.classList.remove("valid");
          input.parentNode.classList.add("invalid");
        }
      } else if (currentInput.id === "lastName") {
        if (currentInput.value.length >= 3) {
          input.parentNode.classList.remove("invalid");
          input.parentNode.classList.add("valid");
        } else {
          input.parentNode.classList.remove("valid");
          input.parentNode.classList.add("invalid");
        }
      } else if (currentInput.id === "email") {
        if (!checkEmail(input.value)) {
          input.parentNode.classList.remove("valid");
          input.parentNode.classList.add("invalid");
        } else {
          input.parentNode.classList.remove("invalid");
          input.parentNode.classList.add("valid");
        }
      } else if (currentInput.id === "password") {
        if (currentInput.value.length >= 6) {
          input.parentNode.classList.remove("invalid");
          input.parentNode.classList.add("valid");
        } else {
          input.parentNode.classList.remove("valid");
          input.parentNode.classList.add("invalid");
        }
      }
    });
  });
});

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
