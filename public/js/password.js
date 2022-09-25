const togglePassword = document.querySelector("#toggle-password");
const password = document.querySelector("#password-input");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the eye slash icon
  togglePassword.classList.contains("fa-eye-slash")
    ? (togglePassword.classList.remove("fa-eye-slash"),
      togglePassword.classList.add("fa-eye"))
    : (togglePassword.classList.remove("fa-eye"),
      togglePassword.classList.add("fa-eye-slash"));
});

//source:
//https://www.csestack.org/hide-show-password-eye-icon-html-javascript/
