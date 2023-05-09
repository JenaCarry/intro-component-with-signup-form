window.addEventListener("load", () => {
  const inputs = document.querySelectorAll("input");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
      if (input.value === "") {
        input.parentNode.classList.add("invalid");
        if (input.id === "email") {
          input.placeholder = "email@example/com";
        } else {
          input.placeholder = "";
        }
      } else {
        input.parentNode.classList.remove("invalid");
      }

      input.addEventListener("keydown", () => {
        input.parentNode.classList.remove("invalid");
      });
    });
  });
});
//#21AD49
