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
});

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
